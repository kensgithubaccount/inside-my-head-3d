diff --git a/app/page.tsx b/app/page.tsx
index b0ec1648260876be17e1e46942ca1c767319cfa8..45d96b2d8928a22c866e2bf491bea17c2125da5f 100644
--- a/app/page.tsx
+++ b/app/page.tsx
@@ -17,69 +17,69 @@ export default function Page(){
   return (
     <>
       <header className="site-header">
         <div className="container row">
           <span className="badge">INSIDE MY HEAD</span>
           <nav className="primary-nav" aria-label="Primary">
             <a href="/work">Work</a>
             <a href="/about">About</a>
             <a href="/contact">Contact</a>
           </nav>
         </div>
       </header>
 
       <main>
         <section className="hero" ref={heroRef}>
           <h1 className="h1">Dive inside my mind</h1>
           <p className="subhead">Pick a lobe to explore the work.</p>
 
           <div className="brain-wrap">
             <div className="brain-3d" aria-hidden="false">
               <Brain3D activeSide={hemi} />
             </div>
 
             {/* Hotspots overlay */}
             <svg className="hotspots" viewBox="0 0 1280 800" role="group" aria-label="Interactive brain hotspots">
-              <a xlinkHref="/work/amtrak" href="/work/amtrak" aria-label="Open Amtrak case study" className="spot spot-left top"
+              <a href="/work/amtrak" aria-label="Open Amtrak case study" className="spot spot-left top"
                  onMouseEnter={()=>setHemiAttr('left')} onFocus={()=>setHemiAttr('left')}
                  onMouseLeave={()=>setHemiAttr(null)} onBlur={()=>setHemiAttr(null)}>
                 <title>Amtrak — Break the Travel Quo</title>
                 <ellipse cx="410" cy="360" rx="250" ry="170" />
               </a>
-              <a xlinkHref="/work/parietal-lobe" href="/work/parietal-lobe" aria-label="Open Parietal lobe case study" className="spot spot-left bottom"
+              <a href="/work/parietal-lobe" aria-label="Open Parietal lobe case study" className="spot spot-left bottom"
                  onMouseEnter={()=>setHemiAttr('left')} onFocus={()=>setHemiAttr('left')}
                  onMouseLeave={()=>setHemiAttr(null)} onBlur={()=>setHemiAttr(null)}>
                 <title>Parietal lobe — You Can’t Make This Stuff Up</title>
                 <ellipse cx="500" cy="600" rx="280" ry="170" />
               </a>
-              <a xlinkHref="/work/nestle-waters" href="/work/nestle-waters" aria-label="Open Nestlé Waters case study" className="spot spot-right top"
+              <a href="/work/nestle-waters" aria-label="Open Nestlé Waters case study" className="spot spot-right top"
                  onMouseEnter={()=>setHemiAttr('right')} onFocus={()=>setHemiAttr('right')}
                  onMouseLeave={()=>setHemiAttr(null)} onBlur={()=>setHemiAttr(null)}>
                 <title>Nestlé Waters — Greatness Springs from Here</title>
                 <ellipse cx="860" cy="360" rx="250" ry="170" />
               </a>
-              <a xlinkHref="/work/cod-mw3" href="/work/cod-mw3" aria-label="Open Call of Duty MW3 case study" className="spot spot-right bottom"
+              <a href="/work/cod-mw3" aria-label="Open Call of Duty MW3 case study" className="spot spot-right bottom"
                  onMouseEnter={()=>setHemiAttr('right')} onFocus={()=>setHemiAttr('right')}
                  onMouseLeave={()=>setHemiAttr(null)} onBlur={()=>setHemiAttr(null)}>
                 <title>Call of Duty MW3 — There’s a Soldier in All of Us</title>
                 <ellipse cx="950" cy="600" rx="280" ry="170" />
               </a>
             </svg>
 
             {/* Labels */}
             <div className="labels">
               <a className="label left top" href="/work/amtrak"
                  onMouseEnter={()=>setHemiAttr('left')} onFocus={()=>setHemiAttr('left')}
                  onMouseLeave={()=>setHemiAttr(null)} onBlur={()=>setHemiAttr(null)}>
                 <span className="label-title">Amtrak</span>
                 <span className="label-sub">Break the Travel Quo</span>
               </a>
               <a className="label left bottom" href="/work/parietal-lobe"
                  onMouseEnter={()=>setHemiAttr('left')} onFocus={()=>setHemiAttr('left')}
                  onMouseLeave={()=>setHemiAttr(null)} onBlur={()=>setHemiAttr(null)}>
                 <span className="label-title">Parietal lobe</span>
                 <span className="label-sub">You Can’t Make This Stuff Up</span>
               </a>
               <a className="label right top" href="/work/nestle-waters"
                  onMouseEnter={()=>setHemiAttr('right')} onFocus={()=>setHemiAttr('right')}
                  onMouseLeave={()=>setHemiAttr(null)} onBlur={()=>setHemiAttr(null)}>
                 <span className="label-title">Nestlé Waters</span>
