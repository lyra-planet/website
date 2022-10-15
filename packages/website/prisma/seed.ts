import { PrismaClient } from '@prisma/client'
import parseFrontMatter from 'front-matter'
import fs from 'fs/promises'
import path from 'path'

const db = new PrismaClient()

const seed =  async() => {

	await db.user.deleteMany({
		where: {
			name: 'Lyra',
		}, 
	})
	await db.articleBox.deleteMany({
		where: {
			name: 'Lyra',
		}, 
	})
	await db.user.create({
		data: {
			name: 'Lyra',
			email: '1170155d48@qq.com'
		},
	})
	await Promise.all(
		(await postsSeed()).map((AtricleBoxData: any)=>{
			return db.articleBox.create({data:AtricleBoxData})
		})
	)
}

seed()

const postsSeed = async()=>{
	const postsPath = await fs.readdir(`${__dirname}/../blog-posts`, {
		withFileTypes: true,
	})
	const posts = await Promise.all(
		postsPath.map(async(dirent)=>{
			const source = await fs.readFile(
				path.join(`${__dirname}/../blog-posts`, dirent.name)
			)
			const { attributes }:{attributes:{author:string,title:string}} = parseFrontMatter(source.toString())
			if(!attributes){
				return{   
					name:'ERROR',
					title:'ERROR',
					content:'ERROR',
					type:'ERROR',
					data:'ERROR'
				}
			}
			return{   
				name:attributes.author,
				title:attributes.title,
				content:'18岁。维克多·孔多利亚（ヴィクトル·コンドリア）大学脑部科学研究所的研究员。仅18岁就跳级大学毕业。更在美国的著名学术期刊（Science）发表论文的货真价实的天才。一见到未知事物，就提起兴趣埋头钻研。属于不太直率的类型，不善于称赞对方。尽管如此，对于自己认可的人，虽然会嘴硬，但还是会抱着尊敬的态度。冈部称她为“助手“、“克莉丝汀娜（Christina）”。而本人并不接受。也是所谓的傲娇。',
				type:'Steins;Gate',
				data:source.toString()
			}
		})
	)
	return posts
}
