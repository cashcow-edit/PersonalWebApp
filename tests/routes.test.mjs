import test from 'node:test';
import assert from 'node:assert/strict';
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:3000';
for(const path of ['/','/about','/for-producers','/work/samsung-commercial','/work/motorola-brand-film','/work/independent-narratives','/work/bedding-lifestyle']){
 test(`render ${path} with shared navigation and email`,async()=>{const response=await fetch(base+path);assert.equal(response.status,200);const html=await response.text();assert.match(html,/id="main"/);assert.match(html,/vrmsachin09@gmail.com/);assert.match(html,/name="description"/);assert.match(html,/Skip to content/);assert.doesNotMatch(html,/Lorem ipsum|@therajivmakhni/);});
}
test('unknown project returns 404',async()=>assert.equal((await fetch(base+'/work/unknown-project')).status,404));
test('sitemap includes all project routes',async()=>{const xml=await (await fetch(base+'/sitemap.xml')).text();assert.match(xml,/for-producers/);assert.equal((xml.match(/<url>/g)||[]).length,7)});
test('social image renders',async()=>{const r=await fetch(base+'/opengraph-image');assert.equal(r.status,200);assert.match(r.headers.get('content-type'),/image\/png/);assert.ok((await r.arrayBuffer()).byteLength>1000)});
