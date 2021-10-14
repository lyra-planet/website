import type {User} from '~/api/entity/user'
import type {FastifyPluginCallback} from 'fastify'

import fp from 'fastify-plugin'
import status_code from 'http-status-codes'

import {userDefinition} from '~/api/entity/user'
import {toFastifySchema} from '~/api/utils/schema'

export interface Config {
	prefix: string
}

export const user: FastifyPluginCallback<Config> = fp(async function (app, options) {
	app.register(async function (app) {
	// self manipulation
		const current_get_schema = {
			response: userDefinition,
		} as const
		app.route({
			method: 'GET',
			url: '/',
			schema: toFastifySchema(current_get_schema),
			preHandler: app.handleAccessToken(),
			handler: async function(req, res) {
				if (!req.access_token)
					return res.status(status_code.INTERNAL_SERVER_ERROR).send('can not get current token')
				const uid = req.access_token.userId
				const user = (await this.entity.user.getWithPath('$', uid))[0]
				if (!user)
					return res.status(status_code.INTERNAL_SERVER_ERROR).send('can not get current user')
				res.send(user)
			},
		})

		const current_patch_schema = {
			body: {
				properties: {
					email: userDefinition.optionalProperties.email,
					phone: userDefinition.optionalProperties.phone,
				},
			},
			response: { type: 'string' },
		} as const
		app.route<{
			Body: {email: User['email'], phone: User['phone']},
		}>({
			method: 'PATCH',
			url: '/',
			schema: toFastifySchema(current_patch_schema),
			preHandler: app.handleAccessToken(),
			handler: async function(req, res) {
				if (!req.access_token)
					return res.status(status_code.INTERNAL_SERVER_ERROR).send('can not get current token')
				await this.entity.user.add('patch', {
					...req.body,
					id: req.access_token.userId as string,
				})
				res.send('OK')
			},
		})

		// other users
		app.register(async function(app) {
			const get_schema = {
				params: {
					properties: {
						id: { type: 'string' },
					},
				},
				response: {
					optionalProperties: userDefinition.optionalProperties,
				},
			} as const
			app.route<{
				Params: {id: User['id']},
			}>({
				method: 'GET',
				url: '/:id',
				schema: toFastifySchema(get_schema),
				preHandler: app.handleAccessToken(),
				handler: async function(req, res) {
					if (!req.access_token)
						return res.status(status_code.INTERNAL_SERVER_ERROR).send('can not get current token')
					const user = (await this.entity.user.getWithPath('$', req.params.id))[0]
					if (!user)
						return res.status(status_code.BAD_REQUEST).send('can not find such user')
					const ret: Record<string, unknown> = {}
					if (user.email?.mode === 'public') {
						ret['email'] = user.email.value
					}
					if (user.phone?.mode === 'public') {
						ret['phone'] = user.phone.value
					}
					res.send(ret)
				},
			})
		},
		{
			prefix: 'users',
		})

		// admin operation
		app.register(async function(app) {
			const update_schema = {
				params: {
					properties: {
						op: { enum: ['create', 'modify'] },
					}
				},
				body: userDefinition,
			} as const
			app.route<{
				Params: {op: 'create' | 'modify'},
				Body: User,
			}>({
				method: 'POST',
				url: '/:op',
				schema: toFastifySchema(update_schema),
				preHandler: app.handleAccessToken('user_write'),
				handler: async function(req, res) {
					if (!req.access_token)
						return res.status(status_code.INTERNAL_SERVER_ERROR).send('can not get current token')
					await this.entity.user.add(req.params.op, req.body)
					res.send('OK')
				},
			})

			const get_schema = {
				params: {
					properties: {
						id: { type: 'string' },
					},
				},
				response: userDefinition,
			} as const
			app.route<{
				Params: {id: User['id']},
			}>({
				method: 'GET',
				url: '/:id',
				schema: toFastifySchema(get_schema),
				preHandler: app.handleAccessToken('user_read'),
				handler: async function(req, res) {
					if (!req.access_token)
						return res.status(status_code.INTERNAL_SERVER_ERROR).send('can not get current token')
					const user = (await this.entity.user.getWithPath('$', req.params.id))[0]
					if (!user)
						return res.status(status_code.BAD_REQUEST).send('can not find such user')
					res.send(user)
				},
			})

			const delete_schema = {
				params: {
					properties: {
						id: { type: 'string' },
					},
				},
				response: { type: 'string' },
			} as const
			app.route<{
				Params: {id: User['id']},
			}>({
				method: 'DELETE',
				url: '/:id',
				schema: toFastifySchema(delete_schema),
				preHandler: app.handleAccessToken('user_write'),
				handler: async function(req, res) {
					if (!req.access_token)
						return res.status(status_code.INTERNAL_SERVER_ERROR).send('can not get current token')
					await this.entity.user.del('$', req.params.id)
					res.send('OK')
				},
			})
		},
		{
			prefix: '/admin',
		})
	},
	{
		prefix: options.prefix,
	})
})