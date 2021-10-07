import type {GrantIdentifier, OAuthClient, OAuthScope, OAuthScopeRepository} from '@jmondi/oauth2-server'
import type {JTDDataType} from '~/alias/jtd'
import type {Config} from '~/api/oauth'
import type {FastifyInstance} from 'fastify'

import {join} from 'pathe'

import {BaseRepository} from '~/api/entity/base'

export const scopeDefinition = {
	properties: {
		name: { type: 'string', metadata: { format: 'alnun' } }
	},
	additionalProperties: true
} as const

export class ScopeRepository extends BaseRepository<JTDDataType<typeof scopeDefinition>> implements OAuthScopeRepository {
	constructor(app: FastifyInstance, cfg: Config) {
		super({
			redis: app.redis,
			data: join(cfg.prefix, 'scope', 'data'),
			id: (a) => `${a.name}`,
			parser: app.ajv.compileParser(scopeDefinition),
			serializer: app.ajv.compileSerializer(scopeDefinition),
		})
	}

	async del(...ids: string[]) {
		await super.delWithOpts({}, ...ids)
	}

	async getAllByIdentifiers(scopeNames: string[]) {
		return await this.getWithPath(...scopeNames)
	}

	async finalize(
		scopes: OAuthScope[],
		_identifier: GrantIdentifier,
		_client: OAuthClient,
		_user_id?: string,
	) {
		if (!_client.allowedGrants.includes(_identifier))
			throw new Error('client request forbidden grant_type')
		if (scopes.some(e => !_client.scopeNames.includes(e.name)))
			throw new Error('client request forbidden scope')
		return scopes
	}
}
