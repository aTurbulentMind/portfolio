const i=async(a,o,n=!1)=>{if(!a)return console.error("No item name provided"),n?null:[];const t=a.trim().toLowerCase();if(!o||!Array.isArray(o)||o.length===0)return console.warn("No images found or invalid images array"),n?null:[];const e=o.find(r=>!r||!r.folder?(console.error("Invalid folder data:",r),!1):r.folder.trim().toLowerCase()===t);if(!e||!Array.isArray(e.images)||e.images.length===0)return console.warn(`No images found for item: ${a}`),n?null:[];const s=e.images.map(r=>`https://vyzeudiywhlxdzpnfehs.supabase.co/storage/v1/object/public/Gallery/items/${e.folder}/${r.name}`);return n?s[0]:s};export{i as g};
