import axios from "axios"
import * as cheerio from "cheerio"

type Meta={title?:string;ogType?:string;contentType?:string;tags:string[]}

const norm=(v?:string|null)=>((v||"").trim()||undefined)

const parseTags=($:cheerio.CheerioAPI)=>{
  const s=new Set<string>()
  const kw=$('meta[name="keywords"]').attr('content')
  if(kw) kw.split(',').map(x=>x.trim()).filter(Boolean).forEach(x=>s.add(x))
  $('meta[property="article:tag"]').each((_,el)=>{
    const v=$(el).attr('content')
    if(v) s.add(v.trim())
  })
  return Array.from(s)
}

export async function fetchMetadata(url:string):Promise<Meta>{
  let contentType: string|undefined
  try{
    const h=await axios.head(url,{maxRedirects:5,timeout:10000,validateStatus:()=>true})
    if(h.status>=200&&h.status<400) contentType=norm(h.headers['content-type'] as string)
  }catch{}
  const res=await axios.get(url,{maxRedirects:5,timeout:15000,responseType:"text"})
  if(!contentType) contentType=norm(res.headers['content-type'] as string)
  const $=cheerio.load(res.data as string)
  const title=norm($('meta[property="og:title"]').attr('content'))||norm($('meta[name="twitter:title"]').attr('content'))||norm($('title').first().text())
  const ogType=norm($('meta[property="og:type"]').attr('content'))
  const tags=parseTags($)
  return {title,ogType,contentType,tags}
}
