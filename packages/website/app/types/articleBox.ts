
export type IArticleBox = {
	id:number,
	type:string,
	name:string|null,
	title:string,
	content:string,
	createTime:Date,
}|null
export type IArticle = {
	id:number,
	type:string,
	name:string|null,
	title:string,
	content:string,
	data:string,
	createTime:Date,
}|null
export type ILoaderData = {
	articleBoxListData:
	Array<IArticleBox>
}