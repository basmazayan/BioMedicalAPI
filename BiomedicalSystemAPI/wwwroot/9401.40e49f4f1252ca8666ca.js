"use strict";var ya=Object.defineProperty,Ca=Object.defineProperties,Sa=Object.getOwnPropertyDescriptors,Zr=Object.getOwnPropertySymbols,Pa=Object.prototype.hasOwnProperty,Ea=Object.prototype.propertyIsEnumerable,It=Math.pow,Xr=(se,H,_)=>H in se?ya(se,H,{enumerable:!0,configurable:!0,writable:!0,value:_}):se[H]=_,Mt=(se,H)=>{for(var _ in H||(H={}))Pa.call(H,_)&&Xr(se,_,H[_]);if(Zr)for(var _ of Zr(H))Ea.call(H,_)&&Xr(se,_,H[_]);return se},tr=(se,H)=>Ca(se,Sa(H));(self.webpackChunkbio_medical=self.webpackChunkbio_medical||[]).push([[9401,6648],{79813:(se,H,_)=>{_.d(H,{D:()=>yt,b:()=>Et});var S=_(92730),z=_(49517),T=_(24578),A=_(47393),I=_(40839),B=_(77544),L=_(43819),O=_(57073),w=_(33866),M=_(34381),y=_(47068),$=_(59509),Q=_(31971),K=_(38105),Y=_(17033),ee=_(78621),k=_(51844),oe=_(24850),Ee=_(68507),rt=_(53018),ke=_(26435),it=_(35102),Pe=_(49579),Tt=_(47448),ft=_(96119),Je=_(94788),X=_(14068),ae=_(85137);function Et(q){const ne=new ae.kG,ht=ne.vertex.code,Ot=ne.fragment.code;return ne.include(ft.a,{name:"Default Material Shader",output:q.output}),ne.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),ne.include(L.f),ne.varyings.add("vpos","vec3"),ne.include(Pe.kl,q),ne.include(I.f,q),ne.include($.LC,q),0!==q.output&&7!==q.output||(ne.include(B.O,q),ne.include(A.w,{linearDepth:!1}),0===q.normalType&&q.offsetBackfaces&&ne.include(z.w),ne.include(Y.Q,q),ne.include(y.B,q),q.instancedColor&&ne.attributes.add("instanceColor","vec4"),ne.varyings.add("localvpos","vec3"),ne.include(w.D,q),ne.include(S.q,q),ne.include(O.R,q),ne.include(M.c,q),ne.vertex.uniforms.add("externalColor","vec4"),ne.varyings.add("vcolorExt","vec4"),q.multipassTerrainEnabled&&ne.varyings.add("depth","float"),ht.add(X.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${q.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${X.H.float(Tt.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===q.normalType?X.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${q.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===q.normalType&&q.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${q.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===q.output&&(ne.include(T.p2,q),ne.include(Tt.sj,q),q.multipassTerrainEnabled&&(ne.fragment.include(K.S),ne.include(oe.l,q)),ne.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),q.hasColorTexture&&ne.fragment.uniforms.add("tex","sampler2D"),ne.fragment.include(Je.y),Ot.add(X.H`
      void main() {
        discardBySlice(vpos);
        ${q.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${q.hasColorTexture?X.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${q.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:X.H`vec4 texColor = vec4(1.0);`}
        ${q.attributeColor?X.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:X.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===q.output&&(ne.include(T.p2,q),ne.include(k.X,q),ne.include(ee.K,q),ne.include(Tt.sj,q),q.receiveShadows&&ne.include(it.hX,q),q.multipassTerrainEnabled&&(ne.fragment.include(K.S),ne.include(oe.l,q)),ne.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),q.hasColorTexture&&ne.fragment.uniforms.add("tex","sampler2D"),ne.include(ke.jV,q),ne.include(rt.T,q),ne.fragment.include(Je.y),ne.include(Ee.k,q),Ot.add(X.H`
      void main() {
        discardBySlice(vpos);
        ${q.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${q.hasColorTexture?X.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${q.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:X.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===q.normalType?X.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:X.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===q.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${q.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===q.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${q.attributeColor?X.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:X.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${q.hasNormalTexture?X.H`
              mat3 tangentSpace = ${q.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===q.pbrMode||2===q.pbrMode?1===q.viewingMode?X.H`vec3 normalGround = normalize(vpos + localOrigin);`:X.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:X.H``}
        ${1===q.pbrMode||2===q.pbrMode?X.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${q.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),ne.include(Q.s,q),ne}const yt=Object.freeze({__proto__:null,build:Et})},8348:(se,H,_)=>{_.d(H,{R:()=>Je,b:()=>ft});var S=_(92730),z=_(49517),T=_(24578),A=_(47393),I=_(40839),B=_(77544),L=_(43819),O=_(57073),w=_(33866),M=_(34381),y=_(59509),$=_(31971),Q=_(38105),K=_(78621),Y=_(51844),ee=_(24850),k=_(53018),oe=_(26435),Ee=_(35102),rt=_(49579),ke=_(47448),it=_(94788),Pe=_(14068),Tt=_(85137);function ft(X){const ae=new Tt.kG,Et=ae.vertex.code,yt=ae.fragment.code;return ae.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),ae.include(L.f),ae.varyings.add("vpos","vec3"),ae.include(rt.kl,X),ae.include(I.f,X),ae.include(y.LC,X),0!==X.output&&7!==X.output||(ae.include(B.O,X),ae.include(A.w,{linearDepth:!1}),X.offsetBackfaces&&ae.include(z.w),X.instancedColor&&ae.attributes.add("instanceColor","vec4"),ae.varyings.add("vNormalWorld","vec3"),ae.varyings.add("localvpos","vec3"),X.multipassTerrainEnabled&&ae.varyings.add("depth","float"),ae.include(w.D,X),ae.include(S.q,X),ae.include(O.R,X),ae.include(M.c,X),ae.vertex.uniforms.add("externalColor","vec4"),ae.varyings.add("vcolorExt","vec4"),Et.add(Pe.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${X.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Pe.H.float(ke.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${X.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${X.multipassTerrainEnabled?Pe.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===X.output&&(ae.include(T.p2,X),ae.include(ke.sj,X),X.multipassTerrainEnabled&&(ae.fragment.include(Q.S),ae.include(ee.l,X)),ae.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),ae.fragment.uniforms.add("view","mat4"),X.hasColorTexture&&ae.fragment.uniforms.add("tex","sampler2D"),ae.fragment.include(it.y),yt.add(Pe.H`
      void main() {
        discardBySlice(vpos);
        ${X.multipassTerrainEnabled?Pe.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${X.hasColorTexture?Pe.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${X.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Pe.H`vec4 texColor = vec4(1.0);`}
        ${X.attributeColor?Pe.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Pe.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===X.output&&(ae.include(T.p2,X),ae.include(Y.X,X),ae.include(K.K,X),ae.include(ke.sj,X),X.receiveShadows&&ae.include(Ee.hX,X),X.multipassTerrainEnabled&&(ae.fragment.include(Q.S),ae.include(ee.l,X)),ae.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),ae.fragment.uniforms.add("view","mat4"),X.hasColorTexture&&ae.fragment.uniforms.add("tex","sampler2D"),ae.include(oe.jV,X),ae.include(k.T,X),ae.fragment.include(it.y),yt.add(Pe.H`
      void main() {
        discardBySlice(vpos);
        ${X.multipassTerrainEnabled?Pe.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${X.hasColorTexture?Pe.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${X.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Pe.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===X.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${X.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===X.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${X.attributeColor?Pe.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Pe.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${Pe.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===X.pbrMode||2===X.pbrMode?1===X.viewingMode?Pe.H`vec3 normalGround = normalize(vpos + localOrigin);`:Pe.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Pe.H``}
        ${1===X.pbrMode||2===X.pbrMode?Pe.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${X.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),ae.include($.s,X),ae}const Je=Object.freeze({__proto__:null,build:ft})},30773:(se,H,_)=>{function S(){return new Float32Array(3)}function T(ee,k,oe){const Ee=new Float32Array(3);return Ee[0]=ee,Ee[1]=k,Ee[2]=oe,Ee}function I(){return S()}function B(){return T(1,1,1)}function L(){return T(1,0,0)}function O(){return T(0,1,0)}function w(){return T(0,0,1)}_.d(H,{c:()=>S,f:()=>T});const M=I(),y=B(),$=L(),Q=O(),K=w();Object.freeze({__proto__:null,create:S,clone:function(ee){const k=new Float32Array(3);return k[0]=ee[0],k[1]=ee[1],k[2]=ee[2],k},fromValues:T,createView:function(ee,k){return new Float32Array(ee,k,3)},zeros:I,ones:B,unitX:L,unitY:O,unitZ:w,ZEROS:M,ONES:y,UNIT_X:$,UNIT_Y:Q,UNIT_Z:K})},56648:(se,H,_)=>{function S(w){return w=w||globalThis.location.hostname,O.some(M=>{var y;return null!=(null==(y=w)?void 0:y.match(M))})}function z(w,M){return w&&(M=M||globalThis.location.hostname)?null!=M.match(A)||null!=M.match(B)?w.replace("static.arcgis.com","staticdev.arcgis.com"):null!=M.match(I)||null!=M.match(L)?w.replace("static.arcgis.com","staticqa.arcgis.com"):w:w}_.d(H,{pJ:()=>z,XO:()=>S});const A=/^devext.arcgis.com$/,I=/^qaext.arcgis.com$/,B=/^[\w-]*\.mapsdevext.arcgis.com$/,L=/^[\w-]*\.mapsqa.arcgis.com$/,O=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,A,I,/^jsapps.esri.com$/,B,L]},9401:(se,H,_)=>{_.r(H),_.d(H,{fetch:()=>_a,gltfToEngineResources:()=>dr,parseUrl:()=>Kr});var S=_(49996),z=_(56648),T=_(18502),A=_(72425),I=_(30641),B=_(60411),L=_(25336),O=_(63702),w=_(33989),M=_(61164),y=_(13707),$=_(58535),Q=_(14567),K=_(85123),Y=_(39685),ee=_(6652),k=_(12569),oe=_(30351),Ee=_(97073),rt=_(61414),ke=_(22345),it=_(7808),Pe=_(63772),Tt=_(55481),ft=_(1294),Je=_(34605);class X{constructor(l,d,v,x){this.primitiveIndices=l,this._numIndexPerPrimitive=d,this.indices=v,this.position=x,this.center=(0,w.c)(),(0,Je.hu)(l.length>=1),(0,Je.hu)(v.length%this._numIndexPerPrimitive==0),(0,Je.hu)(v.length>=l.length*this._numIndexPerPrimitive),(0,Je.hu)(3===x.size||4===x.size);const{data:b,size:C}=x,E=l.length;let D=C*v[this._numIndexPerPrimitive*l[0]];ae.clear(),ae.push(D),this.bbMin=(0,w.f)(b[D],b[D+1],b[D+2]),this.bbMax=(0,w.a)(this.bbMin);for(let W=0;W<E;++W){const te=this._numIndexPerPrimitive*l[W];for(let Z=0;Z<this._numIndexPerPrimitive;++Z){D=C*v[te+Z],ae.push(D);let le=b[D];this.bbMin[0]=Math.min(le,this.bbMin[0]),this.bbMax[0]=Math.max(le,this.bbMax[0]),le=b[D+1],this.bbMin[1]=Math.min(le,this.bbMin[1]),this.bbMax[1]=Math.max(le,this.bbMax[1]),le=b[D+2],this.bbMin[2]=Math.min(le,this.bbMin[2]),this.bbMax[2]=Math.max(le,this.bbMax[2])}}(0,O.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let P=this.radius*this.radius;for(let W=0;W<ae.length;++W){D=ae.getItemAt(W);const te=b[D]-this.center[0],Z=b[D+1]-this.center[1],le=b[D+2]-this.center[2],j=te*te+Z*Z+le*le;if(j<=P)continue;const ve=Math.sqrt(j),_e=.5*(ve-this.radius);this.radius=this.radius+_e,P=this.radius*this.radius;const ye=_e/ve;this.center[0]+=te*ye,this.center[1]+=Z*ye,this.center[2]+=le*ye}ae.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,O.h)(this.bbMin,this.bbMax)>1){const l=(0,O.e)((0,w.c)(),this.bbMin,this.bbMax,.5),d=this.primitiveIndices.length,v=new Uint8Array(d),x=new Array(8);for(let P=0;P<8;++P)x[P]=0;const{data:b,size:C}=this.position;for(let P=0;P<d;++P){let W=0;const te=this._numIndexPerPrimitive*this.primitiveIndices[P];let Z=C*this.indices[te],le=b[Z],j=b[Z+1],ve=b[Z+2];for(let _e=1;_e<this._numIndexPerPrimitive;++_e){Z=C*this.indices[te+_e];const ye=b[Z],Qe=b[Z+1],Be=b[Z+2];ye<le&&(le=ye),Qe<j&&(j=Qe),Be<ve&&(ve=Be)}le<l[0]&&(W|=1),j<l[1]&&(W|=2),ve<l[2]&&(W|=4),v[P]=W,++x[W]}let E=0;for(let P=0;P<8;++P)x[P]>0&&++E;if(E<2)return;const D=new Array(8);for(let P=0;P<8;++P)D[P]=x[P]>0?new Uint32Array(x[P]):void 0;for(let P=0;P<8;++P)x[P]=0;for(let P=0;P<d;++P){const W=v[P];D[W][x[W]++]=this.primitiveIndices[P]}this._children=new Array(8);for(let P=0;P<8;++P)void 0!==D[P]&&(this._children[P]=new X(D[P],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){ae.prune()}}const ae=new ft.Z({deallocator:null});var Et=_(30145);class yt{constructor(){this.id=(0,Et.D)()}unload(){}}var q=_(89421);class ne extends yt{constructor(l,d=[],v=0,x=-1){super(),this._primitiveType=v,this.edgeIndicesLength=x,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[b,C]of l)C&&this._vertexAttributes.set(b,Mt({},C));if(null==d||0===d.length){const b=function(p){const l=p.values().next().value;return null==l?0:l.data.length/l.size}(this._vertexAttributes),C=(0,q.p)(b);this.edgeIndicesLength=this.edgeIndicesLength<0?b:this.edgeIndicesLength;for(const E of this._vertexAttributes.keys())this._indices.set(E,C)}else for(const[b,C]of d)C&&(this._indices.set(b,Ot(C)),"position"===b&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(b).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(l){const d=this._vertexAttributes.get(l);return d&&!d.exclusive&&(d.data=Array.from(d.data),d.exclusive=!0),d}get indices(){return this._indices}get indexCount(){const l=this._indices.values().next().value;return l?l.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,T.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(l){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(l):this.computeAttachmentOriginPoints(l)}computeAttachmentOriginTriangles(l){const d=this.indices.get("position"),v=this.vertexAttributes.get("position");return(0,q.cM)(v,d,l)}computeAttachmentOriginPoints(l){const d=this.indices.get("position"),v=this.vertexAttributes.get("position");return(0,q.NO)(v,d,l)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const l=this.indices.get("position");if(0===l.length)return null;const d=0===this.primitiveType?3:1;(0,Je.hu)(l.length%d==0,"Indexing error: "+l.length+" not divisible by "+d);const v=(0,q.p)(l.length/d),x=this.vertexAttributes.get("position");return new X(v,d,l,x)}}function Ot(p){if(p.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return p;for(const l of p)if(l>=65536)return p;return new Uint16Array(p)}var Wt=_(25618),rr=_(33380),F=_(88415),G=_(65218),ie=_(30164),pe=_(47375),ce=_(22287);function ue(){if((0,T.Wi)(Ae)){const p=l=>(0,ce.V)(`esri/libs/basisu/${l}`);Ae=_.e(5611).then(_.bind(_,75611)).then(l=>l.b).then(({default:l})=>l({locateFile:p}).then(d=>(d.initializeBasis(),delete d.then,d)))}return Ae}let Ae;var we=_(36079),ze=_(21005);let Ze=null,qe=null;function Rt(){return wt.apply(this,arguments)}function wt(){return(wt=(0,S.Z)(function*(){return(0,T.Wi)(qe)&&(qe=ue(),Ze=yield qe),qe})).apply(this,arguments)}function jt(p,l,d,v,x){const b=(0,ze.RG)(l?37496:37492),C=x&&p>1?(It(4,p)-1)/(3*It(4,p-1)):1;return Math.ceil(d*v*b*C)}function $t(p){return p.getNumImages()>=1&&!p.isUASTC()}function Kt(p){return p.getFaces()>=1&&p.isETC1S()}function R(){return(R=(0,S.Z)(function*(p,l,d){(0,T.Wi)(Ze)&&(Ze=yield Rt());const v=new Ze.BasisFile(new Uint8Array(d));if(!$t(v))return null;v.startTranscoding();const x=V(p,l,v.getNumLevels(0),v.getHasAlpha(),v.getImageWidth(0,0),v.getImageHeight(0,0),(b,C)=>v.getImageTranscodedSizeInBytes(0,b,C),(b,C,E)=>v.transcodeImage(E,0,b,C,0,0));return v.close(),v.delete(),x})).apply(this,arguments)}function N(){return(N=(0,S.Z)(function*(p,l,d){(0,T.Wi)(Ze)&&(Ze=yield Rt());const v=new Ze.KTX2File(new Uint8Array(d));if(!Kt(v))return null;v.startTranscoding();const x=V(p,l,v.getLevels(),v.getHasAlpha(),v.getWidth(),v.getHeight(),(b,C)=>v.getImageTranscodedSizeInBytes(b,0,0,C),(b,C,E)=>v.transcodeImage(E,b,0,0,C,0,-1,-1));return v.close(),v.delete(),x})).apply(this,arguments)}function V(p,l,d,v,x,b,C,E){const{compressedTextureETC:D,compressedTextureS3TC:P}=p.capabilities,[W,te]=D?v?[1,37496]:[0,37492]:P?v?[3,33779]:[2,33776]:[13,6408],Z=l.hasMipmap?d:Math.min(1,d),le=[];for(let ye=0;ye<Z;ye++)le.push(new Uint8Array(C(ye,W))),E(ye,W,le[ye]);const j=le.length>1,ve=j?9987:9729,_e=tr(Mt({},l),{samplingMode:ve,hasMipmap:j,internalFormat:te,width:x,height:b});return new we.Z(p,_e,{type:"compressed",levels:le})}const J=ke.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),he=542327876;function Ce(p){return p.charCodeAt(0)+(p.charCodeAt(1)<<8)+(p.charCodeAt(2)<<16)+(p.charCodeAt(3)<<24)}const Ie=Ce("DXT1"),He=Ce("DXT3"),We=Ce("DXT5");function tt(p,l,d){const{textureData:v,internalFormat:x,width:b,height:C}=function(p,l){const d=new Int32Array(p,0,31);if(d[0]!==he)return J.error("Invalid magic number in DDS header"),null;if(!(4&d[20]))return J.error("Unsupported format, must contain a FourCC code"),null;const v=d[21];let x,b;switch(v){case Ie:x=8,b=33776;break;case He:x=16,b=33778;break;case We:x=16,b=33779;break;default:return J.error("Unsupported FourCC code:",function(p){return String.fromCharCode(255&p,p>>8&255,p>>16&255,p>>24&255)}(v)),null}let C=1,E=d[4],D=d[3];0==(3&E)&&0==(3&D)||(J.warn("Rounding up compressed texture size to nearest multiple of 4."),E=E+3&-4,D=D+3&-4);const P=E,W=D;let te,Z;131072&d[2]&&!1!==l&&(C=Math.max(1,d[7])),1===C||(0,F.wt)(E)&&(0,F.wt)(D)||(J.warn("Ignoring mipmaps of non power of two sized compressed texture."),C=1);let le=d[1]+4;const j=[];for(let ve=0;ve<C;++ve)Z=(E+3>>2)*(D+3>>2)*x,te=new Uint8Array(p,le,Z),j.push(te),le+=Z,E=Math.max(1,E>>1),D=Math.max(1,D>>1);return{textureData:{type:"compressed",levels:j},internalFormat:b,width:P,height:W}}(d,l.hasMipmap);return l.samplingMode=v.levels.length>1?9987:9729,l.hasMipmap=v.levels.length>1,l.internalFormat=x,l.width=b,l.height=C,new we.Z(p,l,v)}const ot=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),Ct=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],pt=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var gt=_(20316),_t=_(86550);var ct=_(1907),Dt=_(31555);class Le extends yt{constructor(l,d){super(),this.data=l,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new rr.Z,this.params=d||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Le.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const l=this.data;(0,T.Wi)(l)||(l instanceof HTMLVideoElement?this.startPreloadVideoElement(l):l instanceof HTMLImageElement&&this.startPreloadImageElement(l))}startPreloadVideoElement(l){(0,ie.jc)(l.src)||"auto"===l.preload&&l.crossOrigin||(l.preload="auto",l.crossOrigin="anonymous",l.src=l.src)}startPreloadImageElement(l){(0,ie.HK)(l.src)||(0,ie.jc)(l.src)||l.crossOrigin||(l.crossOrigin="anonymous",l.src=l.src)}static getDataDimensions(l){return l instanceof HTMLVideoElement?{width:l.videoWidth,height:l.videoHeight}:l}static estimateTexMemRequired(l,d){if((0,T.Wi)(l))return 0;if((0,G.eP)(l)||(0,G.lq)(l))return d.encoding===Le.KTX2_ENCODING?function(p,l){if((0,T.Wi)(Ze))return p.byteLength;const d=new Ze.KTX2File(new Uint8Array(p)),v=Kt(d)?jt(d.getLevels(),d.getHasAlpha(),d.getWidth(),d.getHeight(),l):0;return d.close(),d.delete(),v}(l,d.mipmap):d.encoding===Le.BASIS_ENCODING?function(p,l){if((0,T.Wi)(Ze))return p.byteLength;const d=new Ze.BasisFile(new Uint8Array(p)),v=$t(d)?jt(d.getNumLevels(0),d.getHasAlpha(),d.getImageWidth(0,0),d.getImageHeight(0,0),l):0;return d.close(),d.delete(),v}(l,d.mipmap):l.byteLength;const{width:v,height:x}=l instanceof Image||l instanceof ImageData||l instanceof HTMLCanvasElement||l instanceof HTMLVideoElement?Le.getDataDimensions(l):d;return(d.mipmap?4/3:1)*v*x*(d.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(l){var d;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(d=this.params.maxAnisotropy)?d:this.params.mipmap?l.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(l,d){if((0,T.pC)(this._glTexture))return this._glTexture;if((0,T.pC)(this._loadingPromise))return this._loadingPromise;const v=this.data;return(0,T.Wi)(v)?(this._glTexture=new we.Z(l,this.createDescriptor(l),null),this._glTexture):"string"==typeof v?this.loadFromURL(l,d,v):v instanceof Image?this.loadFromImageElement(l,d,v):v instanceof HTMLVideoElement?this.loadFromVideoElement(l,d,v):v instanceof ImageData||v instanceof HTMLCanvasElement?this.loadFromImage(l,v,d):((0,G.eP)(v)||(0,G.lq)(v))&&this.params.encoding===Le.DDS_ENCODING?this.loadFromDDSData(l,v):((0,G.eP)(v)||(0,G.lq)(v))&&this.params.encoding===Le.KTX2_ENCODING?this.loadFromKTX2(l,v):((0,G.eP)(v)||(0,G.lq)(v))&&this.params.encoding===Le.BASIS_ENCODING?this.loadFromBasis(l,v):(0,G.lq)(v)?this.loadFromPixelData(l,v):(0,G.eP)(v)?this.loadFromPixelData(l,new Uint8Array(v)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(l,d,v){if(!(this.data instanceof HTMLVideoElement)||(0,T.Wi)(this._glTexture)||this.data.readyState<2||v===this.data.currentTime)return v;if((0,T.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:x,vao:b,sourceTexture:C}=this._powerOfTwoStretchInfo;C.setData(this.data),this.drawStretchedTexture(l,d,x,b,C,this._glTexture)}else{const{width:x,height:b}=this.data,{width:C,height:E}=this._glTexture.descriptor;x!==C||b!==E?this._glTexture.updateData(0,0,0,Math.min(x,C),Math.min(b,E),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(l,d){return this._glTexture=tt(l,this.createDescriptor(l),d),this._glTexture}loadFromKTX2(l,d){return this.loadAsync(()=>function(p,l,d){return N.apply(this,arguments)}(l,this.createDescriptor(l),d).then(v=>(this._glTexture=v,v)))}loadFromBasis(l,d){return this.loadAsync(()=>function(p,l,d){return R.apply(this,arguments)}(l,this.createDescriptor(l),d).then(v=>(this._glTexture=v,v)))}loadFromPixelData(l,d){(0,Je.hu)(this.params.width>0&&this.params.height>0);const v=this.createDescriptor(l);return v.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,v.width=this.params.width,v.height=this.params.height,this._glTexture=new we.Z(l,v,d),this._glTexture}loadFromURL(l,d,v){var x=this;return this.loadAsync(function(){var b=(0,S.Z)(function*(C){const E=yield(0,Tt.t)(v,{signal:C});return x.loadFromImage(l,E,d)});return function(C){return b.apply(this,arguments)}}())}loadFromImageElement(l,d,v){var x=this;return v.complete?this.loadFromImage(l,v,d):this.loadAsync(function(){var b=(0,S.Z)(function*(C){const E=yield(0,pe.f)(v,v.src,!1,C);return x.loadFromImage(l,E,d)});return function(C){return b.apply(this,arguments)}}())}loadFromVideoElement(l,d,v){return v.readyState>=2?this.loadFromImage(l,v,d):this.loadFromVideoElementAsync(l,d,v)}loadFromVideoElementAsync(l,d,v){return this.loadAsync(x=>new Promise((b,C)=>{const E=()=>{v.removeEventListener("loadeddata",D),v.removeEventListener("error",P),(0,T.hw)(W)},D=()=>{v.readyState>=2&&(E(),b(this.loadFromImage(l,v,d)))},P=te=>{E(),C(te||new rt.Z("Failed to load video"))};v.addEventListener("loadeddata",D),v.addEventListener("error",P);const W=(0,it.fu)(x,()=>P((0,it.zE)()))}))}loadFromImage(l,d,v){const x=Le.getDataDimensions(d);this.params.width=x.width,this.params.height=x.height;const b=this.createDescriptor(l);return b.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(l,b)||(0,F.wt)(x.width)&&(0,F.wt)(x.height)?(b.width=x.width,b.height=x.height,this._glTexture=new we.Z(l,b,d),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(l,d,x,b,v),this._glTexture)}loadAsync(l){const d=new AbortController;this._loadingController=d;const v=l(d.signal);this._loadingPromise=v;const x=()=>{this._loadingController===d&&(this._loadingController=null),this._loadingPromise===v&&(this._loadingPromise=null)};return v.then(x,x),v}requiresPowerOfTwo(l,d){const v=33071,x="number"==typeof d.wrapMode?d.wrapMode===v:d.wrapMode.s===v&&d.wrapMode.t===v;return!(0,Dt.Z)(l.gl)&&(d.hasMipmap||!x)}makePowerOfTwoTexture(l,d,v,x,b){const{width:C,height:E}=v,D=(0,F.Sf)(C),P=(0,F.Sf)(E);let W;switch(x.width=D,x.height=P,this.params.powerOfTwoResizeMode){case 2:x.textureCoordinateScaleFactor=[C/D,E/P],W=new we.Z(l,x),W.updateData(0,0,0,C,E,d);break;case 1:case null:case void 0:W=this.stretchToPowerOfTwo(l,d,x,b());break;default:(0,Wt.Bg)(this.params.powerOfTwoResizeMode)}return x.hasMipmap&&W.generateMipmap(),W}stretchToPowerOfTwo(l,d,v,x){const b=new we.Z(l,v),C=new ct.Z(l,{colorTarget:0,depthStencilTarget:0},b),E=new we.Z(l,{target:3553,pixelFormat:v.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!v.flipped,maxAnisotropy:8,preMultiplyAlpha:v.preMultiplyAlpha},d),D=function(p,l=Ct,d=ot,v=-1,x=1){let b=null;return b=l===pt?new Float32Array([v,v,0,0,x,v,1,0,v,x,0,1,x,x,1,1]):new Float32Array([v,v,x,v,v,x,x,x]),new _t.Z(p,d,{geometry:l},{geometry:gt.Z.createVertex(p,35044,b)})}(l),P=l.getBoundFramebufferObject();return this.drawStretchedTexture(l,x,C,D,E,b),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:D,sourceTexture:E,framebuffer:C}:(D.dispose(!0),E.dispose(),C.detachColorTexture(),C.dispose()),l.bindFramebuffer(P),b}drawStretchedTexture(l,d,v,x,b,C){l.bindFramebuffer(v);const E=l.getViewport();l.setViewport(0,0,C.descriptor.width,C.descriptor.height);const D=d.program;l.useProgram(D),D.setUniform4f("color",1,1,1,1),D.bindTexture(b,"tex"),l.bindVAO(x),d.bindPipelineState(l),l.drawArrays(5,0,(0,ze._V)(x,"geometry")),l.bindFramebuffer(null),l.setViewport(E.x,E.y,E.width,E.height)}unload(){if((0,T.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:l,vao:d,sourceTexture:v}=this._powerOfTwoStretchInfo;d.dispose(!0),v.dispose(),l.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,T.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,T.pC)(this._loadingController)){const l=this._loadingController;this._loadingController=null,this._loadingPromise=null,l.abort()}this.events.emit("unloaded")}}Le.DDS_ENCODING="image/vnd-ms.dds",Le.KTX2_ENCODING="image/ktx2",Le.BASIS_ENCODING="image/x.basis";var ut=_(46880),bt=_(47448);var nt=_(97004);class At extends yt{constructor(l,d){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=ot,this._parameters=(0,nt.Uf)(l,d),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(l){return!1}setParameters(l){(0,nt.LO)(this._parameters,l)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(l){}get visible(){return this._visible}set visible(l){l!==this._visible&&(this._visible=l,this.parametersChanged())}shouldRender(l){return this.isVisible()&&this.isVisibleInPass(l.pass)&&0!=(this.renderOccluded&l.renderOccludedMask)}isVisibleInPass(l){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(l){l!==this._renderPriority&&(this._renderPriority=l,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(l){l!==this._insertOrder&&(this._insertOrder=l,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,T.pC)(this.repository)&&this.repository.materialChanged(this)}}var qt=_(81269),kr=_(3456),Yr=_(49635),Qr=_(30773),ar=_(7731),Jr=(_(30627),_(64617)),qr=(_(45072),_(29067)),Nt=_(60942);new qr.x(function(){return{origin:null,direction:null}});(0,w.c)(),(0,w.c)();const ni=ke.Z.getLogger("esri.geometry.support.sphere");function mr(){return(0,ar.c)()}function Cr(p,l=mr()){return(0,Jr.c)(l,p)}function fr(p){return Array.isArray(p)?p[3]:p}function Vt(p){return Array.isArray(p)?p:bi}function nr(p,l,d){if((0,T.Wi)(l))return!1;const{origin:v,direction:x}=l,b=fi;b[0]=v[0]-p[0],b[1]=v[1]-p[1],b[2]=v[2]-p[2];const C=x[0]*x[0]+x[1]*x[1]+x[2]*x[2],E=2*(x[0]*b[0]+x[1]*b[1]+x[2]*b[2]),D=E*E-4*C*(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]-p[3]*p[3]);if(D<0)return!1;const P=Math.sqrt(D);let W=(-E-P)/(2*C);const te=(-E+P)/(2*C);return(W<0||te<W&&te>0)&&(W=te),!(W<0||(d&&(d[0]=v[0]+x[0]*W,d[1]=v[1]+x[1]*W,d[2]=v[2]+x[2]*W),0))}const fi=(0,w.c)();function Sr(p,l,d){const v=Nt.WM.get(),x=Nt.MP.get();(0,O.c)(v,l.origin,l.direction);const b=fr(p);(0,O.c)(d,v,l.origin),(0,O.a)(d,d,1/(0,O.l)(d)*b);const C=Er(p,l.origin),E=function(p,l){const d=(0,O.d)(p,l)/((0,O.l)(p)*(0,O.l)(l));return-(0,F.ZF)(d)}(l.origin,d);return(0,B.i)(x),(0,B.e)(x,x,E+C,v),(0,O.m)(d,d,x),d}function Pr(p,l,d){const v=(0,O.f)(Nt.WM.get(),l,Vt(p)),x=(0,O.a)(Nt.WM.get(),v,p[3]/(0,O.l)(v));return(0,O.b)(d,x,Vt(p))}function Er(p,l){const d=(0,O.f)(Nt.WM.get(),l,Vt(p)),v=(0,O.l)(d),x=fr(p),b=x+Math.abs(x-v);return(0,F.ZF)(x/b)}const vr=(0,w.c)();function Or(p,l,d,v){const x=(0,O.f)(vr,l,Vt(p));switch(d){case 0:{const b=(0,F.jE)(x,vr)[2];return(0,O.s)(v,-Math.sin(b),Math.cos(b),0)}case 1:{const b=(0,F.jE)(x,vr),C=b[1],E=b[2],D=Math.sin(C);return(0,O.s)(v,-D*Math.cos(E),-D*Math.sin(E),Math.cos(C))}case 2:return(0,O.n)(v,x);default:return}}function wr(p,l){const d=(0,O.f)(pr,l,Vt(p));return(0,O.l)(d)-p[3]}const bi=(0,w.c)(),pr=(0,w.c)();Object.freeze({__proto__:null,create:mr,copy:Cr,fromCenterAndRadius:function(p,l){return(0,ar.f)(p[0],p[1],p[2],l)},wrap:function(p){return p},clear:function(p){p[0]=p[1]=p[2]=p[3]=0},fromRadius:function(p){return p},getRadius:fr,getCenter:Vt,fromValues:function(p,l,d,v){return(0,ar.f)(p,l,d,v)},elevate:function(p,l,d){return p!==d&&(0,O.g)(d,p),d[3]=p[3]+l,d},setExtent:function(p,l,d){return ni.error("sphere.setExtent is not yet supported"),p===d?d:Cr(p,d)},intersectRay:nr,intersectsRay:function(p,l){return nr(p,l,null)},intersectRayClosestSilhouette:function(p,l,d){if(nr(p,l,d))return d;const v=Sr(p,l,Nt.WM.get());return(0,O.b)(d,l.origin,(0,O.a)(Nt.WM.get(),l.direction,(0,O.i)(l.origin,v)/(0,O.l)(l.direction))),d},closestPointOnSilhouette:Sr,closestPoint:function(p,l,d){return nr(p,l,d)?d:(function(p,l,d){const v=(0,O.d)(p.direction,(0,O.f)(d,l,p.origin));(0,O.b)(d,p.origin,(0,O.a)(d,p.direction,v))}(l,Vt(p),d),Pr(p,d,d))},projectPoint:Pr,distanceToSilhouette:function(p,l){const d=(0,O.f)(Nt.WM.get(),l,Vt(p)),v=(0,O.p)(d),x=p[3]*p[3];return Math.sqrt(Math.abs(v-x))},angleToSilhouette:Er,axisAt:Or,altitudeAt:wr,setAltitudeAt:function(p,l,d,v){const x=wr(p,l),b=Or(p,l,2,pr),C=(0,O.a)(pr,b,d-x);return(0,O.b)(v,l,C)}});const Dr=new class{constructor(l=0){this.offset=l,this.sphere=mr(),this.tmpVertex=(0,w.c)()}applyToVertex(l,d,v){const x=this.objectTransform.transform;let b=x[0]*l+x[4]*d+x[8]*v+x[12],C=x[1]*l+x[5]*d+x[9]*v+x[13],E=x[2]*l+x[6]*d+x[10]*v+x[14];const D=this.offset/Math.sqrt(b*b+C*C+E*E);b+=b*D,C+=C*D,E+=E*D;const P=this.objectTransform.inverse;return this.tmpVertex[0]=P[0]*b+P[4]*C+P[8]*E+P[12],this.tmpVertex[1]=P[1]*b+P[5]*C+P[9]*E+P[13],this.tmpVertex[2]=P[2]*b+P[6]*C+P[10]*E+P[14],this.tmpVertex}applyToMinMax(l,d){const v=this.offset/Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]);l[0]+=l[0]*v,l[1]+=l[1]*v,l[2]+=l[2]*v;const x=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]+=d[0]*x,d[1]+=d[1]*x,d[2]+=d[2]*x}applyToAabb(l){const d=this.offset/Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]);l[0]+=l[0]*d,l[1]+=l[1]*d,l[2]+=l[2]*d;const v=this.offset/Math.sqrt(l[3]*l[3]+l[4]*l[4]+l[5]*l[5]);return l[3]+=l[3]*v,l[4]+=l[4]*v,l[5]+=l[5]*v,l}applyToBoundingSphere(l){const d=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]),v=this.offset/d;return this.sphere[0]=l[0]+l[0]*v,this.sphere[1]=l[1]+l[1]*v,this.sphere[2]=l[2]+l[2]*v,this.sphere[3]=l[3]+l[3]*this.offset/d,this.sphere}};new class{constructor(l=0){this.offset=l,this.componentLocalOriginLength=0,this.tmpVertex=(0,w.c)(),this.mbs=(0,ar.c)(),this.obb={center:(0,w.c)(),halfSize:(0,Qr.c)(),quaternion:null}}set localOrigin(l){this.componentLocalOriginLength=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2])}applyToVertex(l,d,v){const x=l,b=d,C=v+this.componentLocalOriginLength,E=this.offset/Math.sqrt(x*x+b*b+C*C);return this.tmpVertex[0]=l+x*E,this.tmpVertex[1]=d+b*E,this.tmpVertex[2]=v+C*E,this.tmpVertex}applyToAabb(l){const d=l[0],v=l[1],x=l[2]+this.componentLocalOriginLength,b=l[3],C=l[4],E=l[5]+this.componentLocalOriginLength,D=this.offset/Math.sqrt(d*d+v*v+x*x);l[0]+=d*D,l[1]+=v*D,l[2]+=x*D;const P=this.offset/Math.sqrt(b*b+C*C+E*E);return l[3]+=b*P,l[4]+=C*P,l[5]+=E*P,l}applyToMbs(l){const d=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]),v=this.offset/d;return this.mbs[0]=l[0]+l[0]*v,this.mbs[1]=l[1]+l[1]*v,this.mbs[2]=l[2]+l[2]*v,this.mbs[3]=l[3]+l[3]*this.offset/d,this.mbs}applyToObb(l){const d=l.center,v=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);this.obb.center[0]=d[0]+d[0]*v,this.obb.center[1]=d[1]+d[1]*v,this.obb.center[2]=d[2]+d[2]*v,(0,O.q)(this.obb.halfSize,l.halfSize,l.quaternion),(0,O.b)(this.obb.halfSize,this.obb.halfSize,l.center);const x=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*x,this.obb.halfSize[1]+=this.obb.halfSize[1]*x,this.obb.halfSize[2]+=this.obb.halfSize[2]*x,(0,O.f)(this.obb.halfSize,this.obb.halfSize,l.center),(0,kr.c)(Ir,l.quaternion),(0,O.q)(this.obb.halfSize,this.obb.halfSize,Ir),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=l.quaternion,this.obb}};new class{constructor(l=0){this.offset=l,this.tmpVertex=(0,w.c)()}applyToVertex(l,d,v){const x=l+this.localOrigin[0],b=d+this.localOrigin[1],C=v+this.localOrigin[2],E=this.offset/Math.sqrt(x*x+b*b+C*C);return this.tmpVertex[0]=l+x*E,this.tmpVertex[1]=d+b*E,this.tmpVertex[2]=v+C*E,this.tmpVertex}applyToAabb(l){const d=l[0]+this.localOrigin[0],v=l[1]+this.localOrigin[1],x=l[2]+this.localOrigin[2],b=l[3]+this.localOrigin[0],C=l[4]+this.localOrigin[1],E=l[5]+this.localOrigin[2],D=this.offset/Math.sqrt(d*d+v*v+x*x);l[0]+=d*D,l[1]+=v*D,l[2]+=x*D;const P=this.offset/Math.sqrt(b*b+C*C+E*E);return l[3]+=b*P,l[4]+=C*P,l[5]+=E*P,l}};const Ir=(0,Yr.a)();function Si(p,l,d,v){const x=d.typedBuffer,b=d.typedBufferStride,C=p.length;v*=b;for(let E=0;E<C;++E){const D=2*p[E];x[v]=l[D],x[v+1]=l[D+1],v+=b}}function Rr(p,l,d,v,x){const b=d.typedBuffer,C=d.typedBufferStride,E=p.length;if(v*=C,null==x||1===x)for(let D=0;D<E;++D){const P=3*p[D];b[v]=l[P],b[v+1]=l[P+1],b[v+2]=l[P+2],v+=C}else for(let D=0;D<E;++D){const P=3*p[D];for(let W=0;W<x;++W)b[v]=l[P],b[v+1]=l[P+1],b[v+2]=l[P+2],v+=C}}function Ei(p,l,d,v,x,b=1){if(!d)return void Rr(p,l,v,x,b);const C=v.typedBuffer,E=v.typedBufferStride,D=p.length,P=d[0],W=d[1],te=d[2],Z=d[4],le=d[5],j=d[6],ve=d[8],_e=d[9],ye=d[10],Qe=d[12],Be=d[13],Ne=d[14];if(x*=E,1===b)for(let je=0;je<D;++je){const Se=3*p[je],Te=l[Se],Oe=l[Se+1],re=l[Se+2];C[x]=P*Te+Z*Oe+ve*re+Qe,C[x+1]=W*Te+le*Oe+_e*re+Be,C[x+2]=te*Te+j*Oe+ye*re+Ne,x+=E}else for(let je=0;je<D;++je){const Se=3*p[je],Te=l[Se],Oe=l[Se+1],re=l[Se+2],Me=P*Te+Z*Oe+ve*re+Qe,Re=W*Te+le*Oe+_e*re+Be,Fe=te*Te+j*Oe+ye*re+Ne;for(let De=0;De<b;++De)C[x]=Me,C[x+1]=Re,C[x+2]=Fe,x+=E}}function Oi(p,l,d,v,x,b=1){if(!d)return void Rr(p,l,v,x,b);const C=d,E=v.typedBuffer,D=v.typedBufferStride,P=p.length,W=C[0],te=C[1],Z=C[2],le=C[4],j=C[5],ve=C[6],_e=C[8],ye=C[9],Qe=C[10],Be=!(0,B.k)(C),Ne=1e-6;if(x*=D,1===b)for(let Se=0;Se<P;++Se){const Te=3*p[Se],Oe=l[Te],re=l[Te+1],Me=l[Te+2];let Re=W*Oe+le*re+_e*Me,Fe=te*Oe+j*re+ye*Me,De=Z*Oe+ve*re+Qe*Me;if(Be){const $e=Re*Re+Fe*Fe+De*De;if($e<.999999&&$e>Ne){const Ve=1/Math.sqrt($e);Re*=Ve,Fe*=Ve,De*=Ve}}E[x+0]=Re,E[x+1]=Fe,E[x+2]=De,x+=D}else for(let Se=0;Se<P;++Se){const Te=3*p[Se],Oe=l[Te],re=l[Te+1],Me=l[Te+2];let Re=W*Oe+le*re+_e*Me,Fe=te*Oe+j*re+ye*Me,De=Z*Oe+ve*re+Qe*Me;if(Be){const $e=Re*Re+Fe*Fe+De*De;if($e<.999999&&$e>Ne){const Ve=1/Math.sqrt($e);Re*=Ve,Fe*=Ve,De*=Ve}}for(let $e=0;$e<b;++$e)E[x+0]=Re,E[x+1]=Fe,E[x+2]=De,x+=D}}function wi(p,l,d,v,x,b=1){if(!d)return void function(p,l,d,v,x=1){const b=d.typedBuffer,C=d.typedBufferStride,E=p.length;if(v*=C,1===x)for(let D=0;D<E;++D){const P=4*p[D];b[v]=l[P],b[v+1]=l[P+1],b[v+2]=l[P+2],b[v+3]=l[P+3],v+=C}else for(let D=0;D<E;++D){const P=4*p[D];for(let W=0;W<x;++W)b[v]=l[P],b[v+1]=l[P+1],b[v+2]=l[P+2],b[v+3]=l[P+3],v+=C}}(p,l,v,x,b);const C=d,E=v.typedBuffer,D=v.typedBufferStride,P=p.length,W=C[0],te=C[1],Z=C[2],le=C[4],j=C[5],ve=C[6],_e=C[8],ye=C[9],Qe=C[10],Be=!(0,B.k)(C),Ne=1e-6;if(x*=D,1===b)for(let Se=0;Se<P;++Se){const Te=4*p[Se],Oe=l[Te],re=l[Te+1],Me=l[Te+2],Re=l[Te+3];let Fe=W*Oe+le*re+_e*Me,De=te*Oe+j*re+ye*Me,$e=Z*Oe+ve*re+Qe*Me;if(Be){const Ve=Fe*Fe+De*De+$e*$e;if(Ve<.999999&&Ve>Ne){const Ke=1/Math.sqrt(Ve);Fe*=Ke,De*=Ke,$e*=Ke}}E[x+0]=Fe,E[x+1]=De,E[x+2]=$e,E[x+3]=Re,x+=D}else for(let Se=0;Se<P;++Se){const Te=4*p[Se],Oe=l[Te],re=l[Te+1],Me=l[Te+2],Re=l[Te+3];let Fe=W*Oe+le*re+_e*Me,De=te*Oe+j*re+ye*Me,$e=Z*Oe+ve*re+Qe*Me;if(Be){const Ve=Fe*Fe+De*De+$e*$e;if(Ve<.999999&&Ve>Ne){const Ke=1/Math.sqrt(Ve);Fe*=Ke,De*=Ke,$e*=Ke}}for(let Ve=0;Ve<b;++Ve)E[x+0]=Fe,E[x+1]=De,E[x+2]=$e,E[x+3]=Re,x+=D}}function Fr(p,l,d,v,x,b=1){const C=v.typedBuffer,E=v.typedBufferStride,D=p.length;if(x*=E,1===b){if(4===d)for(let P=0;P<D;++P){const W=4*p[P];C[x]=l[W],C[x+1]=l[W+1],C[x+2]=l[W+2],C[x+3]=l[W+3],x+=E}else if(3===d)for(let P=0;P<D;++P){const W=3*p[P];C[x]=l[W],C[x+1]=l[W+1],C[x+2]=l[W+2],C[x+3]=255,x+=E}}else if(4===d)for(let P=0;P<D;++P){const W=4*p[P];for(let te=0;te<b;++te)C[x]=l[W],C[x+1]=l[W+1],C[x+2]=l[W+2],C[x+3]=l[W+3],x+=E}else if(3===d)for(let P=0;P<D;++P){const W=3*p[P];for(let te=0;te<b;++te)C[x]=l[W],C[x+1]=l[W+1],C[x+2]=l[W+2],C[x+3]=255,x+=E}}var xe=_(79076),Ai=_(24578),Li=_(40839),Ii=_(59509),Ri=_(11576),Fi=_(24850),Ui=_(26435),zi=_(35102),Hi=_(49579),Ur=_(95319);function zr(p,l,d){(0,B.a)(Hr,d,l),p.setUniform3fv("localOrigin",l),p.setUniformMatrix4fv("view",Hr)}const Hr=(0,_(21669).c)();class Br{constructor(l,d){this._module=l,this._loadModule=d}get(){return this._module}reload(){var l=this;return(0,S.Z)(function*(){return l._module=yield l._loadModule(),l._module})()}}function be(p={}){return(l,d)=>{var v,x;l._parameterNames=null!=(v=l._parameterNames)?v:[],l._parameterNames.push(d);const b=l._parameterNames.length-1,C=p.count||2,E=Math.ceil(Math.log2(C)),D=null!=(x=l._parameterBits)?x:[0];let P=0;for(;D[P]+E>16;)P++,P>=D.length&&D.push(0);l._parameterBits=D;const W=D[P],te=(1<<E)-1<<W;D[P]+=E,Object.defineProperty(l,d,{get(){return this[b]},set(Z){if(this[b]!==Z&&(this[b]=Z,this._keyDirty=!0,this._parameterBits[P]=this._parameterBits[P]&~te|+Z<<W&te,"number"!=typeof Z&&"boolean"!=typeof Z))throw"Configuration value for "+d+" must be boolean or number, got "+typeof Z}})}}var ji=_(59450),$i=_(10673);class Nr extends $i.${constructor(l,d,v){super(l,d.generateSource("vertex"),d.generateSource("fragment"),v),this._textures=new Map,this._freeTextureUnits=new ft.Z({deallocator:null}),this._fragmentUniforms=(0,ji.hZ)()?d.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(l,d){if((0,T.Wi)(l)||null==l.glName){const x=this._textures.get(d);return x&&(this._context.bindTexture(null,x.unit),this._freeTextureUnit(x),this._textures.delete(d)),null}let v=this._textures.get(d);return null==v?(v=this._allocTextureUnit(l),this._textures.set(d,v)):v.texture=l,this._context.useProgram(this),this.setUniform1i(d,v.unit),this._context.bindTexture(l,v.unit),v.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((l,d)=>{this._context.bindTexture(l.texture,l.unit),this.setUniform1i(d,l.unit)}),(0,T.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(l=>{if(("sampler2D"===l.type||"samplerCube"===l.type)&&!this._textures.has(l.name))throw new Error(`Texture sampler ${l.name} has no bound texture`)})}_allocTextureUnit(l){return{texture:l,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(l){this._freeTextureUnits.push(l.unit)}}const Ki={mask:255},Zi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Xi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var ki=_(79813),lr=_(89501);class er extends class{constructor(l,d,v=(()=>this.dispose())){this.release=v,d&&(this._config=d.snapshot()),this._program=this.initializeProgram(l),this._pipeline=this.initializePipeline(l)}dispose(){this._program=(0,T.O3)(this._program),this._pipeline=this._config=null}reload(l){(0,T.O3)(this._program),this._program=this.initializeProgram(l)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(l,d){}bindMaterial(l,d){}bindDraw(l){}bindPipelineState(l,d=null,v){l.setPipelineState(this.getPipelineState(d,v))}ensureAttributeLocations(l){this.program.assertCompatibleVertexAttributeLocations(l)}get primitiveType(){return 4}getPipelineState(l,d){return this._pipeline}}{initializeProgram(l){const d=er.shader.get(),v=this.configuration,x=d.build({OITEnabled:0===v.transparencyPassType,output:v.output,viewingMode:l.viewingMode,receiveShadows:v.receiveShadows,slicePlaneEnabled:v.slicePlaneEnabled,sliceHighlightDisabled:v.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:v.symbolColors,vvSize:v.vvSize,vvColor:v.vvColor,vvInstancingEnabled:!0,instanced:v.instanced,instancedColor:v.instancedColor,instancedDoublePrecision:v.instancedDoublePrecision,pbrMode:v.usePBR?v.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:v.hasMetalnessAndRoughnessTexture,hasEmissionTexture:v.hasEmissionTexture,hasOcclusionTexture:v.hasOcclusionTexture,hasNormalTexture:v.hasNormalTexture,hasColorTexture:v.hasColorTexture,receiveAmbientOcclusion:v.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:v.normalsTypeDerivate?3:0,doubleSidedMode:v.doubleSidedMode,vertexTangents:v.vertexTangents,attributeTextureCoordinates:v.hasMetalnessAndRoughnessTexture||v.hasEmissionTexture||v.hasOcclusionTexture||v.hasNormalTexture||v.hasColorTexture?1:0,textureAlphaPremultiplied:v.textureAlphaPremultiplied,attributeColor:v.vertexColors,screenSizePerspectiveEnabled:v.screenSizePerspective,verticalOffsetEnabled:v.verticalOffset,offsetBackfaces:v.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,Ur.I)(l.rctx),alphaDiscardMode:v.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:v.multipassTerrainEnabled,cullAboveGround:v.cullAboveGround});return new Nr(l.rctx,x,ot)}bindPass(l,d){var v,x;!function(p,l){p.setUniformMatrix4fv("proj",l)}(this.program,d.camera.projectionMatrix);const b=this.configuration.output;(1===this.configuration.output||d.multipassTerrainEnabled||3===b)&&this.program.setUniform2fv("cameraNearFar",d.camera.nearFar),d.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",d.inverseViewport),(0,Fi.p)(this.program,d)),7===b&&(this.program.setUniform1f("opacity",l.opacity),this.program.setUniform1f("layerOpacity",l.layerOpacity),this.program.setUniform4fv("externalColor",l.externalColor),this.program.setUniform1i("colorMixMode",nt.FZ[l.colorMixMode])),0===b?(d.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",l.ambient),this.program.setUniform3fv("diffuse",l.diffuse),this.program.setUniform4fv("externalColor",l.externalColor),this.program.setUniform1i("colorMixMode",nt.FZ[l.colorMixMode]),this.program.setUniform1f("opacity",l.opacity),this.program.setUniform1f("layerOpacity",l.layerOpacity),this.configuration.usePBR&&(0,Ui.nW)(this.program,l,this.configuration.isSchematic)):4===b&&(0,Ri.wW)(this.program,d),(0,Hi.uj)(this.program,l),(0,Ii.Mo)(this.program,l,d),(0,nt.bj)(l.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==l.textureAlphaMode&&3!==l.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",l.textureAlphaCutoff),null==(v=d.shadowMap)||v.bind(this.program),null==(x=d.ssaoHelper)||x.bind(this.program,d.camera)}bindDraw(l){const d=this.configuration.instancedDoublePrecision?(0,w.f)(l.camera.viewInverseTransposeMatrix[3],l.camera.viewInverseTransposeMatrix[7],l.camera.viewInverseTransposeMatrix[11]):l.origin;zr(this.program,d,l.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function(p,l,d){p.setUniform3f("camPos",d[3]-l[0],d[7]-l[1],d[11]-l[2])}(this.program,d,l.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",l.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Li.f.bindCustomOrigin(this.program,d),(0,Ai.Vv)(this.program,this.configuration,l.slicePlane,d),0===this.configuration.output&&(0,zi.vL)(this.program,l,d)}setPipeline(l,d){const v=this.configuration,x=3===l,b=2===l;return(0,lr.sm)({blending:0!==v.output&&7!==v.output||!v.transparent?null:x?qt.wu:(0,qt.$L)(l),culling:(p=v,(p.cullFace?0!==p.cullFace:!p.slicePlaneEnabled&&!p.transparent&&!p.doubleSidedMode)&&(0,lr.zp)(v.cullFace)),depthTest:{func:(0,qt.$x)(l)},depthWrite:x||b?v.writeDepth&&lr.LZ:null,colorWrite:lr.BK,stencilWrite:v.sceneHasOcludees?Ki:null,stencilTest:v.sceneHasOcludees?d?Xi:Zi:null,polygonOffset:x||b?null:(0,qt.je)(v.enableOffset)});var p}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(l,d){return d?this._occludeePipelineState:super.getPipelineState(l,d)}}er.shader=new Br(ki.D,()=>_.e(6988).then(_.bind(_,66988)));class ge extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const l=this._parameterNames,d={key:this.key};for(const v of l)d[v]=this[v];return d}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,xe._)([be({count:8})],ge.prototype,"output",void 0),(0,xe._)([be({count:4})],ge.prototype,"alphaDiscardMode",void 0),(0,xe._)([be({count:3})],ge.prototype,"doubleSidedMode",void 0),(0,xe._)([be()],ge.prototype,"isSchematic",void 0),(0,xe._)([be()],ge.prototype,"vertexColors",void 0),(0,xe._)([be()],ge.prototype,"offsetBackfaces",void 0),(0,xe._)([be()],ge.prototype,"symbolColors",void 0),(0,xe._)([be()],ge.prototype,"vvSize",void 0),(0,xe._)([be()],ge.prototype,"vvColor",void 0),(0,xe._)([be()],ge.prototype,"verticalOffset",void 0),(0,xe._)([be()],ge.prototype,"receiveShadows",void 0),(0,xe._)([be()],ge.prototype,"slicePlaneEnabled",void 0),(0,xe._)([be()],ge.prototype,"sliceHighlightDisabled",void 0),(0,xe._)([be()],ge.prototype,"receiveAmbientOcclusion",void 0),(0,xe._)([be()],ge.prototype,"screenSizePerspective",void 0),(0,xe._)([be()],ge.prototype,"textureAlphaPremultiplied",void 0),(0,xe._)([be()],ge.prototype,"hasColorTexture",void 0),(0,xe._)([be()],ge.prototype,"usePBR",void 0),(0,xe._)([be()],ge.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,xe._)([be()],ge.prototype,"hasEmissionTexture",void 0),(0,xe._)([be()],ge.prototype,"hasOcclusionTexture",void 0),(0,xe._)([be()],ge.prototype,"hasNormalTexture",void 0),(0,xe._)([be()],ge.prototype,"instanced",void 0),(0,xe._)([be()],ge.prototype,"instancedColor",void 0),(0,xe._)([be()],ge.prototype,"instancedDoublePrecision",void 0),(0,xe._)([be()],ge.prototype,"vertexTangents",void 0),(0,xe._)([be()],ge.prototype,"normalsTypeDerivate",void 0),(0,xe._)([be()],ge.prototype,"writeDepth",void 0),(0,xe._)([be()],ge.prototype,"sceneHasOcludees",void 0),(0,xe._)([be()],ge.prototype,"transparent",void 0),(0,xe._)([be()],ge.prototype,"enableOffset",void 0),(0,xe._)([be({count:3})],ge.prototype,"cullFace",void 0),(0,xe._)([be({count:4})],ge.prototype,"transparencyPassType",void 0),(0,xe._)([be()],ge.prototype,"multipassTerrainEnabled",void 0),(0,xe._)([be()],ge.prototype,"cullAboveGround",void 0);var Qi=_(8348);class cr extends er{initializeProgram(l){const d=cr.shader.get(),v=this.configuration,x=d.build({OITEnabled:0===v.transparencyPassType,output:v.output,viewingMode:l.viewingMode,receiveShadows:v.receiveShadows,slicePlaneEnabled:v.slicePlaneEnabled,sliceHighlightDisabled:v.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:v.symbolColors,vvSize:v.vvSize,vvColor:v.vvColor,vvInstancingEnabled:!0,instanced:v.instanced,instancedColor:v.instancedColor,instancedDoublePrecision:v.instancedDoublePrecision,pbrMode:v.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:v.hasColorTexture,receiveAmbientOcclusion:v.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:v.hasColorTexture?1:0,textureAlphaPremultiplied:v.textureAlphaPremultiplied,attributeColor:v.vertexColors,screenSizePerspectiveEnabled:v.screenSizePerspective,verticalOffsetEnabled:v.verticalOffset,offsetBackfaces:v.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,Ur.I)(l.rctx),alphaDiscardMode:v.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:v.multipassTerrainEnabled,cullAboveGround:v.cullAboveGround});return new Nr(l.rctx,x,ot)}}cr.shader=new Br(Qi.R,()=>_.e(5346).then(_.bind(_,15346)));class Vr extends At{constructor(l){super(l,qi),this.supportsEdges=!0,this.techniqueConfig=new ge,this.vertexBufferLayout=function(p){const l=p.textureId||p.normalTextureId||p.metallicRoughnessTextureId||p.emissiveTextureId||p.occlusionTextureId,d=(0,ut.U$)().vec3f("position").vec3f("normal");return p.vertexTangents&&d.vec4f("tangent"),l&&d.vec2f("uv0"),p.vertexColors&&d.vec4u8("color"),p.symbolColors&&d.vec4u8("symbolColor"),d}(this.parameters),this.instanceBufferLayout=l.instanced?function(p){let l=(0,ut.U$)();return l=p.instancedDoublePrecision?l.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):l.mat4f("model").mat4f("modelNormal"),p.instanced&&p.instanced.indexOf("color")>-1&&(l=l.vec4f("instanceColor")),p.instanced&&p.instanced.indexOf("featureAttribute")>-1&&(l=l.vec4f("instanceFeatureAttribute")),l}(this.parameters):null}isVisibleInPass(l){return 4!==l&&6!==l&&7!==l||this.parameters.castShadows}isVisible(){const l=this.parameters;if(!super.isVisible()||0===l.layerOpacity)return!1;const d=l.instanced,v=l.vertexColors,x=l.symbolColors,b=!!d&&d.indexOf("color")>-1,C=l.vvColorEnabled,E="replace"===l.colorMixMode,D=l.opacity>0,P=l.externalColor&&l.externalColor[3]>0;return v&&(b||C||x)?!!E||D:v?E?P:D:b||C||x?!!E||D:E?P:D}getTechniqueConfig(l,d){return this.techniqueConfig.output=l,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=d.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=d.cullAboveGround,0!==l&&7!==l||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!d.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=d.transparencyPassType,this.techniqueConfig.enableOffset=d.camera.relativeElevation<qt.ve),this.techniqueConfig}intersect(l,d,v,x,b,C,E){if(null!==this.parameters.verticalOffset){const D=x.camera;(0,O.s)(_r,v[12],v[13],v[14]);let P=null;switch(x.viewingMode){case 1:P=(0,O.n)(Wr,_r);break;case 2:P=(0,O.g)(Wr,oa)}let W=0;if(null!==this.parameters.verticalOffset){const te=(0,O.f)(na,_r,D.eye),Z=(0,O.l)(te),le=(0,O.a)(te,te,1/Z);let j=null;this.parameters.screenSizePerspective&&(j=(0,O.d)(P,le)),W+=(0,nt.Hx)(D,Z,this.parameters.verticalOffset,j,this.parameters.screenSizePerspective)}(0,O.a)(P,P,W),(0,O.t)(gr,P,x.transform.inverseRotation),b=(0,O.f)(ia,b,gr),C=(0,O.f)(aa,C,gr)}var p;(0,nt.Bw)(l,d,x,b,C,(p=x.verticalOffset,(0,T.pC)(p)?(Dr.offset=p,Dr):null),E)}requiresSlot(l){return l===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===l}createGLMaterial(l){return 0===l.output||7===l.output||1===l.output||2===l.output||3===l.output||4===l.output?new Ji(l):null}createBufferWriter(){return new ea(this.vertexBufferLayout,this.instanceBufferLayout)}}class Ji extends class extends class{constructor(l){this._material=l.material,this._techniqueRep=l.techniqueRep,this._output=l.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(l,d,v=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(l,this._material.getTechniqueConfig(v,d),this._technique),this._technique}ensureResources(l){return 2}}{constructor(l){super(l),this._numLoading=0,this._disposed=!1,this._textureRepository=l.textureRep,this._textureId=l.textureId,this._acquire(l.textureId).then(d=>this._texture=d),this._acquire(l.normalTextureId).then(d=>this._textureNormal=d),this._acquire(l.emissiveTextureId).then(d=>this._textureEmissive=d),this._acquire(l.occlusionTextureId).then(d=>this._textureOcclusion=d),this._acquire(l.metallicRoughnessTextureId).then(d=>this._textureMetallicRoughness=d)}dispose(){this._texture=(0,T.RY)(this._texture),this._textureNormal=(0,T.RY)(this._textureNormal),this._textureEmissive=(0,T.RY)(this._textureEmissive),this._textureOcclusion=(0,T.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,T.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(l){return 0===this._numLoading?2:1}updateTexture(l){((0,T.Wi)(this._texture)||l!==this._texture.id)&&(this._texture=(0,T.RY)(this._texture),this._textureId=l,this._acquire(this._textureId).then(d=>this._texture=d))}bindTextures(l){(0,T.pC)(this._texture)&&l.bindTexture(this._texture.glTexture,"tex"),(0,T.pC)(this._textureNormal)&&l.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,T.pC)(this._textureEmissive)&&l.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,T.pC)(this._textureOcclusion)&&l.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,T.pC)(this._textureMetallicRoughness)&&l.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(l){const d=(0,T.pC)(this._texture)?this._texture.glTexture:null;(0,T.pC)(d)&&d.descriptor.textureCoordinateScaleFactor?l.setUniform2fv("textureCoordinateScaleFactor",d.descriptor.textureCoordinateScaleFactor):l.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(l){return(0,T.Wi)(l)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(l).then(d=>this._disposed?((0,T.RY)(d),null):d).finally(()=>--this._numLoading))}}{constructor(l){super(Mt(Mt({},l),l.material.parameters))}updateParameters(l){const d=this._material.parameters;return this.updateTexture(d.textureId),this.ensureTechnique(d.treeRendering?cr:er,l)}_updateShadowState(l){l.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:l.shadowMappingEnabled})}_updateOccludeeState(l){l.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:l.hasOccludees})}beginSlot(l){return 0!==this._output&&7!==this._output||(this._updateShadowState(l),this._updateOccludeeState(l)),this.updateParameters(l)}bind(l,d){d.bindPass(this._material.parameters,l),this.bindTextures(d.program)}}const qi=Mt({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,I.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:bt.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},{renderOccluded:1});class ea{constructor(l,d){this.vertexBufferLayout=l,this.instanceBufferLayout=d}allocate(l){return this.vertexBufferLayout.createBuffer(l)}elementCount(l){return l.indices.get("position").length}write(l,d,v,x){!function(p,l,d,v,x,b){for(const C of l.fieldNames){const E=p.vertexAttributes.get(C),D=p.indices.get(C);if(E&&D)switch(C){case"position":{(0,Je.hu)(3===E.size);const P=x.getField(C,y.ct);P&&Ei(D,E.data,d,P,b);break}case"normal":{(0,Je.hu)(3===E.size);const P=x.getField(C,y.ct);P&&Oi(D,E.data,v,P,b);break}case"uv0":{(0,Je.hu)(2===E.size);const P=x.getField(C,y.Eu);P&&Si(D,E.data,P,b);break}case"color":{(0,Je.hu)(3===E.size||4===E.size);const P=x.getField(C,y.mc);P&&Fr(D,E.data,E.size,P,b);break}case"symbolColor":{(0,Je.hu)(3===E.size||4===E.size);const P=x.getField(C,y.mc);P&&Fr(D,E.data,E.size,P,b);break}case"tangent":{(0,Je.hu)(4===E.size);const P=x.getField(C,y.ek);P&&wi(D,E.data,v,P,b);break}}}}(d,this.vertexBufferLayout,l.transformation,l.invTranspTransformation,v,x)}}const ia=(0,w.c)(),aa=(0,w.c)(),oa=(0,w.f)(0,0,1),Wr=(0,w.c)(),gr=(0,w.c)(),_r=(0,w.c)(),na=(0,w.c)(),Lt=ke.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function sa(p,l){return xr.apply(this,arguments)}function xr(){return(xr=(0,S.Z)(function*(p,l){const d=yield la(p,l);return{resource:d,textures:yield ma(d.textureDefinitions,l)}})).apply(this,arguments)}function la(p,l){return br.apply(this,arguments)}function br(){return(br=(0,S.Z)(function*(p,l){const d=(0,T.pC)(l)&&l.streamDataRequester;if(d)return ca(p,d,l);const v=yield(0,Ee.q6)((0,oe.default)(p,(0,T.Wg)(l)));if(!0===v.ok)return v.value.data;(0,it.r9)(v.error),Gr(v.error)})).apply(this,arguments)}function ca(p,l,d){return Mr.apply(this,arguments)}function Mr(){return(Mr=(0,S.Z)(function*(p,l,d){const v=yield(0,Ee.q6)(l.request(p,"json",d));if(!0===v.ok)return v.value;(0,it.r9)(v.error),Gr(v.error.details.url)})).apply(this,arguments)}function Gr(p){throw new rt.Z("",`Request for object resource failed: ${p}`)}function da(p){const l=p.params,d=l.topology;let v=!0;switch(l.vertexAttributes||(Lt.warn("Geometry must specify vertex attributes"),v=!1),l.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const b=l.faces;if(b){if(l.vertexAttributes)for(const C in l.vertexAttributes){const E=b[C];E&&E.values?(null!=E.valueType&&"UInt32"!==E.valueType&&(Lt.warn(`Unsupported indexed geometry indices type '${E.valueType}', only UInt32 is currently supported`),v=!1),null!=E.valuesPerElement&&1!==E.valuesPerElement&&(Lt.warn(`Unsupported indexed geometry values per element '${E.valuesPerElement}', only 1 is currently supported`),v=!1)):(Lt.warn(`Indexed geometry does not specify face indices for '${C}' attribute`),v=!1)}}else Lt.warn("Indexed geometries must specify faces"),v=!1;break}default:Lt.warn(`Unsupported topology '${d}'`),v=!1}p.params.material||(Lt.warn("Geometry requires material"),v=!1);const x=p.params.vertexAttributes;for(const b in x)x[b].values||(Lt.warn("Geometries with externally defined attributes are not yet supported"),v=!1);return v}function ua(p,l){const d=[],v=[],x=[],b=[],C=p.resource,E=Pe.G.parse(C.version||"1.0","wosr");va.validate(E);const D=C.model.name,P=C.model.geometries,W=C.materialDefinitions,te=p.textures;let Z=0;const le=new Map;for(let j=0;j<P.length;j++){const ve=P[j];if(!da(ve))continue;const _e=fa(ve),ye=ve.params.vertexAttributes,Qe=[];for(const re in ye){const Me=ye[re],Re=Me.values;Qe.push([re,{data:Re,size:Me.valuesPerElement,exclusive:!0}])}const Be=[];if("PerAttributeArray"!==ve.params.topology){const re=ve.params.faces;for(const Me in re)Be.push([Me,new Uint32Array(re[Me].values)])}const Ne=te&&te[_e.texture];if(Ne&&!le.has(_e.texture)){const{image:re,params:Me}=Ne,Re=new Le(re,Me);b.push(Re),le.set(_e.texture,Re)}const je=le.get(_e.texture),Se=je?je.id:void 0;let Te=x[_e.material]?x[_e.material][_e.texture]:null;if(!Te){const re=W[_e.material.substring(_e.material.lastIndexOf("/")+1)].params;1===re.transparency&&(re.transparency=0);const Me=Ne&&Ne.alphaChannelUsage,Re=re.transparency>0||"transparency"===Me||"maskAndTransparency"===Me,Fe=Ne?jr(Ne.alphaChannelUsage):void 0,De={ambient:(0,w.d)(re.diffuse),diffuse:(0,w.d)(re.diffuse),opacity:1-(re.transparency||0),transparent:Re,textureAlphaMode:Fe,textureAlphaCutoff:.33,textureId:Se,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:re.externalColorMixMode||"tint",textureAlphaPremultiplied:!!Ne&&!!Ne.params.preMultiplyAlpha};(0,T.pC)(l)&&l.materialParamsMixin&&Object.assign(De,l.materialParamsMixin),Te=new Vr(De),x[_e.material]||(x[_e.material]={}),x[_e.material][_e.texture]=Te}v.push(Te);const Oe=new ne(Qe,Be);Z+=Be.position?Be.position.length:0,d.push(Oe)}return{name:D,stageResources:{textures:b,materials:v,geometries:d},pivotOffset:C.model.pivotOffset,boundingBox:ha(d),numberOfVertices:Z,lodThreshold:null}}function ha(p){const l=(0,M.cS)();return p.forEach(d=>{const v=d.boundingInfo;(0,T.pC)(v)&&((0,M.pp)(l,v.getBBMin()),(0,M.pp)(l,v.getBBMax()))}),l}function ma(p,l){return Tr.apply(this,arguments)}function Tr(){return(Tr=(0,S.Z)(function*(p,l){const d=[];for(const b in p){const C=p[b],E=C.images[0].data;if(!E){Lt.warn("Externally referenced texture data is not yet supported");continue}const D=C.encoding+";base64,"+E,P="/textureDefinitions/"+b,W="rgba"===C.channels?C.alphaChannelUsage||"transparency":"none",te={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==jr(W)},Z=(0,T.pC)(l)&&l.disableTextures?Promise.resolve(null):(0,Tt.t)(D,l);d.push(Z.then(le=>({refId:P,image:le,params:te,alphaChannelUsage:W})))}const v=yield Promise.all(d),x={};for(const b of v)x[b.refId]=b;return x})).apply(this,arguments)}function jr(p){switch(p){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function fa(p){const l=p.params;return{id:1,material:l.material,texture:l.texture,region:l.texture}}const va=new Pe.G(1,2,"wosr");var Jt=_(87335),pa=_(14121),$r=_(9168),ga=_(18635);function _a(p,l){return yr.apply(this,arguments)}function yr(){return(yr=(0,S.Z)(function*(p,l){const d=Kr((0,z.pJ)(p));if("wosr"===d.fileType){const D=yield l.cache?l.cache.loadWOSR(d.url,l):sa(d.url,l),P=ua(D,l);return{lods:[P],referenceBoundingBox:P.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:D.remove}}const v=yield l.cache?l.cache.loadGLTF(d.url,l,l.usePBR):(0,ee.z)(new Y.C(l.streamDataRequester),d.url,l,l.usePBR),x=(0,T.U2)(v.model.meta,"ESRI_proxyEllipsoid");v.meta.isEsriSymbolResource&&(0,T.pC)(x)&&-1!==v.meta.uri.indexOf("/RealisticTrees/")&&Ma(v,x);const b=v.meta.isEsriSymbolResource?{usePBR:l.usePBR,isSchematic:!1,treeRendering:v.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:l.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},C=tr(Mt({},l.materialParamsMixin),{treeRendering:v.customMeta.esriTreeRendering});if(null!=d.specifiedLodIndex){const D=dr(v,b,C,d.specifiedLodIndex);let P=D[0].boundingBox;return 0!==d.specifiedLodIndex&&(P=dr(v,b,C,0)[0].boundingBox),{lods:D,referenceBoundingBox:P,isEsriSymbolResource:v.meta.isEsriSymbolResource,isWosr:!1,remove:v.remove}}const E=dr(v,b,C);return{lods:E,referenceBoundingBox:E[0].boundingBox,isEsriSymbolResource:v.meta.isEsriSymbolResource,isWosr:!1,remove:v.remove}})).apply(this,arguments)}function Kr(p){const l=p.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return l?{fileType:"gltf",url:l[1],specifiedLodIndex:null!=l[4]?Number(l[4]):null}:p.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:p,specifiedLodIndex:null}:{fileType:"unknown",url:p,specifiedLodIndex:null}}function dr(p,l,d,v){const x=p.model,b=(0,I.c)(),C=new Array,E=new Map,D=new Map;return x.lods.forEach((P,W)=>{if(void 0!==v&&W!==v)return;const te={name:P.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,T.pC)(P.lodThreshold)?P.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,M.cS)()};C.push(te),P.parts.forEach(Z=>{const le=Z.material+(Z.attributes.normal?"_normal":"")+(Z.attributes.color?"_color":"")+(Z.attributes.texCoord0?"_texCoord0":"")+(Z.attributes.tangent?"_tangent":""),j=x.materials.get(Z.material),ve=(0,T.pC)(Z.attributes.texCoord0),_e=(0,T.pC)(Z.attributes.normal),ye=function(p){switch(p){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(j.alphaMode);if(!E.has(le)){if(ve){if((0,T.pC)(j.textureColor)&&!D.has(j.textureColor)){const Ke=x.textures.get(j.textureColor),Ta=tr(Mt({},Ke.parameters),{preMultiplyAlpha:1!==ye});D.set(j.textureColor,new Le(Ke.data,Ta))}if((0,T.pC)(j.textureNormal)&&!D.has(j.textureNormal)){const Ke=x.textures.get(j.textureNormal);D.set(j.textureNormal,new Le(Ke.data,Ke.parameters))}if((0,T.pC)(j.textureOcclusion)&&!D.has(j.textureOcclusion)){const Ke=x.textures.get(j.textureOcclusion);D.set(j.textureOcclusion,new Le(Ke.data,Ke.parameters))}if((0,T.pC)(j.textureEmissive)&&!D.has(j.textureEmissive)){const Ke=x.textures.get(j.textureEmissive);D.set(j.textureEmissive,new Le(Ke.data,Ke.parameters))}if((0,T.pC)(j.textureMetallicRoughness)&&!D.has(j.textureMetallicRoughness)){const Ke=x.textures.get(j.textureMetallicRoughness);D.set(j.textureMetallicRoughness,new Le(Ke.data,Ke.parameters))}}const re=It(j.color[0],1/Jt.K),Me=It(j.color[1],1/Jt.K),Re=It(j.color[2],1/Jt.K),Fe=It(j.emissiveFactor[0],1/Jt.K),De=It(j.emissiveFactor[1],1/Jt.K),$e=It(j.emissiveFactor[2],1/Jt.K),Ve=(0,T.pC)(j.textureColor)&&ve?D.get(j.textureColor):null;E.set(le,new Vr(Mt(tr(Mt({},l),{transparent:0===ye,textureAlphaMode:ye,textureAlphaCutoff:j.alphaCutoff,diffuse:[re,Me,Re],ambient:[re,Me,Re],opacity:j.opacity,doubleSided:j.doubleSided,doubleSidedType:"winding-order",cullFace:j.doubleSided?0:2,vertexColors:!!Z.attributes.color,vertexTangents:!!Z.attributes.tangent,normals:_e?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,T.pC)(Ve)?Ve.id:void 0,colorMixMode:j.colorMixMode,normalTextureId:(0,T.pC)(j.textureNormal)&&ve?D.get(j.textureNormal).id:void 0,textureAlphaPremultiplied:(0,T.pC)(Ve)&&!!Ve.params.preMultiplyAlpha,occlusionTextureId:(0,T.pC)(j.textureOcclusion)&&ve?D.get(j.textureOcclusion).id:void 0,emissiveTextureId:(0,T.pC)(j.textureEmissive)&&ve?D.get(j.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,T.pC)(j.textureMetallicRoughness)&&ve?D.get(j.textureMetallicRoughness).id:void 0,emissiveFactor:[Fe,De,$e],mrrFactors:[j.metallicFactor,j.roughnessFactor,l.mrrFactors[2]],isSchematic:!1}),d)))}const Qe=function(p,l){switch(l){case 4:return(0,k.nh)(p);case 5:return(0,k.DA)(p);case 6:return(0,k.jX)(p)}}(Z.indices||Z.attributes.position.count,Z.primitiveType),Be=Z.attributes.position.count,Ne=(0,K.gS)(y.ct,Be);(0,$.t)(Ne,Z.attributes.position,Z.transform);const je=[["position",{data:Ne.typedBuffer,size:Ne.elementCount,exclusive:!0}]],Se=[["position",Qe]];if((0,T.pC)(Z.attributes.normal)){const re=(0,K.gS)(y.ct,Be);(0,A.a)(b,Z.transform),(0,$.a)(re,Z.attributes.normal,b),je.push(["normal",{data:re.typedBuffer,size:re.elementCount,exclusive:!0}]),Se.push(["normal",Qe])}if((0,T.pC)(Z.attributes.tangent)){const re=(0,K.gS)(y.ek,Be);(0,A.a)(b,Z.transform),(0,Q.t)(re,Z.attributes.tangent,b),je.push(["tangent",{data:re.typedBuffer,size:re.elementCount,exclusive:!0}]),Se.push(["tangent",Qe])}if((0,T.pC)(Z.attributes.texCoord0)){const re=(0,K.gS)(y.Eu,Be);(0,pa.n)(re,Z.attributes.texCoord0),je.push(["uv0",{data:re.typedBuffer,size:re.elementCount,exclusive:!0}]),Se.push(["uv0",Qe])}if((0,T.pC)(Z.attributes.color)){const re=(0,K.gS)(y.mc,Be);if(4===Z.attributes.color.elementCount)Z.attributes.color instanceof y.ek?(0,Q.s)(re,Z.attributes.color,255):Z.attributes.color instanceof y.mc?(0,$r.c)(re,Z.attributes.color):Z.attributes.color instanceof y.v6&&(0,Q.s)(re,Z.attributes.color,1/256);else{(0,$r.f)(re,255,255,255,255);const Me=new y.ne(re.buffer,0,4);Z.attributes.color instanceof y.ct?(0,$.s)(Me,Z.attributes.color,255):Z.attributes.color instanceof y.ne?(0,ga.c)(Me,Z.attributes.color):Z.attributes.color instanceof y.mw&&(0,$.s)(Me,Z.attributes.color,1/256)}je.push(["color",{data:re.typedBuffer,size:re.elementCount,exclusive:!0}]),Se.push(["color",Qe])}const Te=new ne(je,Se);te.stageResources.geometries.push(Te),te.stageResources.materials.push(E.get(le)),ve&&((0,T.pC)(j.textureColor)&&te.stageResources.textures.push(D.get(j.textureColor)),(0,T.pC)(j.textureNormal)&&te.stageResources.textures.push(D.get(j.textureNormal)),(0,T.pC)(j.textureOcclusion)&&te.stageResources.textures.push(D.get(j.textureOcclusion)),(0,T.pC)(j.textureEmissive)&&te.stageResources.textures.push(D.get(j.textureEmissive)),(0,T.pC)(j.textureMetallicRoughness)&&te.stageResources.textures.push(D.get(j.textureMetallicRoughness))),te.numberOfVertices+=Be;const Oe=Te.boundingInfo;(0,T.pC)(Oe)&&((0,M.pp)(te.boundingBox,Oe.getBBMin()),(0,M.pp)(te.boundingBox,Oe.getBBMax()))})}),C}function Ma(p,l){for(let d=0;d<p.model.lods.length;++d){const v=p.model.lods[d];p.customMeta.esriTreeRendering=!0;for(const x of v.parts){const b=x.attributes.normal;if((0,T.Wi)(b))return;const C=x.attributes.position,E=C.count,D=(0,w.c)(),P=(0,w.c)(),W=(0,w.c)(),te=(0,K.gS)(y.mc,E),Z=(0,K.gS)(y.ct,E),le=(0,B.b)((0,L.c)(),x.transform);for(let j=0;j<E;j++){C.getVec(j,P),b.getVec(j,D),(0,O.m)(P,P,x.transform),(0,O.f)(W,P,l.center),(0,O.E)(W,W,l.radius);const ve=W[2],_e=(0,O.l)(W),ye=Math.min(.45+.55*_e*_e,1);(0,O.E)(W,W,l.radius),(0,O.m)(W,W,le),(0,O.n)(W,W),d+1!==p.model.lods.length&&p.model.lods.length>1&&(0,O.e)(W,W,D,ve>-1?.2:Math.min(-4*ve-3.8,1)),Z.setVec(j,W),te.set(j,0,255*ye),te.set(j,1,255*ye),te.set(j,2,255*ye),te.set(j,3,255)}x.attributes.normal=Z,x.attributes.color=te}}}},92730:(se,H,_)=>{_.d(H,{q:()=>z});var S=_(14068);function z(T,A){0===A.output&&A.receiveShadows?(T.varyings.add("linearDepth","float"),T.vertex.code.add(S.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===A.output||3===A.output?(T.varyings.add("linearDepth","float"),T.vertex.uniforms.add("cameraNearFar","vec2"),T.vertex.code.add(S.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):T.vertex.code.add(S.H`void forwardLinearDepth() {}`)}},49517:(se,H,_)=>{_.d(H,{w:()=>z});var S=_(14068);function z(T){T.vertex.code.add(S.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},24578:(se,H,_)=>{_.d(H,{p2:()=>I,Vv:()=>L});var S=_(18502),z=_(63702),T=_(33989),A=_(14068);function I(w,M){if(M.slicePlaneEnabled){w.extensions.add("GL_OES_standard_derivatives"),M.sliceEnabledForVertexPrograms&&(w.vertex.uniforms.add("slicePlaneOrigin","vec3"),w.vertex.uniforms.add("slicePlaneBasis1","vec3"),w.vertex.uniforms.add("slicePlaneBasis2","vec3")),w.fragment.uniforms.add("slicePlaneOrigin","vec3"),w.fragment.uniforms.add("slicePlaneBasis1","vec3"),w.fragment.uniforms.add("slicePlaneBasis2","vec3");const y=A.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,$=A.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,Q=M.sliceHighlightDisabled?A.H`#define highlightSlice(_color_, _pos_) (_color_)`:A.H`
        ${$}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;M.sliceEnabledForVertexPrograms&&w.vertex.code.add(y),w.fragment.code.add(y),w.fragment.code.add(Q)}else{const y=A.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;M.sliceEnabledForVertexPrograms&&w.vertex.code.add(y),w.fragment.code.add(y)}}function L(w,M,y,$){M.slicePlaneEnabled&&((0,S.pC)(y)?($?((0,z.f)(O,y.origin,$),w.setUniform3fv("slicePlaneOrigin",O)):w.setUniform3fv("slicePlaneOrigin",y.origin),w.setUniform3fv("slicePlaneBasis1",y.basis1),w.setUniform3fv("slicePlaneBasis2",y.basis2)):(w.setUniform3fv("slicePlaneBasis1",T.Z),w.setUniform3fv("slicePlaneBasis2",T.Z),w.setUniform3fv("slicePlaneOrigin",T.Z)))}const O=(0,T.c)()},47393:(se,H,_)=>{_.d(H,{w:()=>z});var S=_(14068);function z(T,A){A.linearDepth?T.vertex.code.add(S.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):T.vertex.code.add(S.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},40839:(se,H,_)=>{_.d(H,{f:()=>I});var O,S=_(33989),z=_(95319),T=_(14068),A=_(46117);function I(O,w){w.instanced&&w.instancedDoublePrecision&&(O.attributes.add("modelOriginHi","vec3"),O.attributes.add("modelOriginLo","vec3"),O.attributes.add("model","mat3"),O.attributes.add("modelNormal","mat3")),w.instancedDoublePrecision&&(O.vertex.include(z.$,w),O.vertex.uniforms.add("viewOriginHi","vec3"),O.vertex.uniforms.add("viewOriginLo","vec3"));const M=[T.H`
    vec3 calculateVPos() {
      ${w.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,T.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${w.instancedDoublePrecision?T.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,T.H`
    vec3 dpNormal(vec4 _normal) {
      ${w.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,T.H`
    vec3 dpNormalView(vec4 _normal) {
      ${w.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,w.vertexTangents?T.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${w.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:T.H``];O.vertex.code.add(M[0]),O.vertex.code.add(M[1]),O.vertex.code.add(M[2]),2===w.output&&O.vertex.code.add(M[3]),O.vertex.code.add(M[4])}(O=I||(I={})).Uniforms=class{},O.bindCustomOrigin=function(y,$){(0,A.po)($,B,L,3),y.setUniform3fv("viewOriginHi",B),y.setUniform3fv("viewOriginLo",L)};const B=(0,S.c)(),L=(0,S.c)()},77544:(se,H,_)=>{_.d(H,{O:()=>T});var S=_(14068);function z(A){const I=S.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;A.fragment.code.add(I),A.vertex.code.add(I)}function T(A,I){0===I.normalType&&(A.attributes.add("normal","vec3"),A.vertex.code.add(S.H`vec3 normalModel() {
return normal;
}`)),1===I.normalType&&(A.include(z),A.attributes.add("normalCompressed","vec2"),A.vertex.code.add(S.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===I.normalType&&(A.extensions.add("GL_OES_standard_derivatives"),A.fragment.code.add(S.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},43819:(se,H,_)=>{_.d(H,{f:()=>z});var S=_(14068);function z(T){T.attributes.add("position","vec3"),T.vertex.code.add(S.H`vec3 positionModel() { return position; }`)}},57073:(se,H,_)=>{_.d(H,{R:()=>T});var S=_(14068);function z(A){A.vertex.code.add(S.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${S.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${S.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${S.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${S.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function T(A,I){I.symbolColor?(A.include(z),A.attributes.add("symbolColor","vec4"),A.varyings.add("colorMixMode","mediump float")):A.fragment.uniforms.add("colorMixMode","int"),I.symbolColor?A.vertex.code.add(S.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):A.vertex.code.add(S.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},33866:(se,H,_)=>{_.d(H,{D:()=>z});var S=_(14068);function z(T,A){1===A.attributeTextureCoordinates&&(T.attributes.add("uv0","vec2"),T.varyings.add("vuv0","vec2"),T.vertex.code.add(S.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===A.attributeTextureCoordinates&&(T.attributes.add("uv0","vec2"),T.varyings.add("vuv0","vec2"),T.attributes.add("uvRegion","vec4"),T.varyings.add("vuvRegion","vec4"),T.vertex.code.add(S.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===A.attributeTextureCoordinates&&T.vertex.code.add(S.H`void forwardTextureCoordinates() {}`)}},34381:(se,H,_)=>{_.d(H,{c:()=>z});var S=_(14068);function z(T,A){A.attributeColor?(T.attributes.add("color","vec4"),T.varyings.add("vColor","vec4"),T.vertex.code.add(S.H`void forwardVertexColor() { vColor = color; }`),T.vertex.code.add(S.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):T.vertex.code.add(S.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},47068:(se,H,_)=>{_.d(H,{B:()=>w});var S=_(77544),z=_(30641),T=_(25336),A=_(33989),I=_(43819),B=_(95319),L=_(14068);function O(M,y){M.include(I.f),M.vertex.include(B.$,y),M.varyings.add("vPositionWorldCameraRelative","vec3"),M.varyings.add("vPosition_view","vec3"),M.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),M.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),M.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),M.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),M.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),M.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),M.vertex.uniforms.add("uTransform_ProjFromView","mat4"),M.vertex.code.add(L.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),M.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),M.fragment.code.add(L.H`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function w(M,y){0===y.normalType||1===y.normalType?(M.include(S.O,y),M.varyings.add("vNormalWorld","vec3"),M.varyings.add("vNormalView","vec3"),M.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),M.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),M.vertex.code.add(L.H`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===y.normalType?(M.include(O,y),M.varyings.add("vNormalWorld","vec3"),M.vertex.code.add(L.H`
    void forwardNormal() {
      vNormalWorld = ${1===y.viewingMode?L.H`normalize(vPositionWorldCameraRelative);`:L.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):M.vertex.code.add(L.H`void forwardNormal() {}`)}!function(M){M.ModelTransform=class{constructor(){this.worldFromModel_RS=(0,z.c)(),this.worldFromModel_TH=(0,A.c)(),this.worldFromModel_TL=(0,A.c)()}};M.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,A.c)(),this.worldFromView_TL=(0,A.c)(),this.viewFromCameraRelative_RS=(0,z.c)(),this.projFromView=(0,T.c)()}},M.bindModelTransform=function(Y,ee){Y.setUniformMatrix3fv("uTransform_WorldFromModel_RS",ee.worldFromModel_RS),Y.setUniform3fv("uTransform_WorldFromModel_TH",ee.worldFromModel_TH),Y.setUniform3fv("uTransform_WorldFromModel_TL",ee.worldFromModel_TL)},M.bindViewProjTransform=function(Y,ee){Y.setUniform3fv("uTransform_WorldFromView_TH",ee.worldFromView_TH),Y.setUniform3fv("uTransform_WorldFromView_TL",ee.worldFromView_TL),Y.setUniformMatrix4fv("uTransform_ProjFromView",ee.projFromView),Y.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",ee.viewFromCameraRelative_RS)}}(O||(O={})),(w||(w={})).bindUniforms=function($,Q){$.setUniformMatrix4fv("viewNormal",Q)}},88758:(se,H,_)=>{_.d(H,{i:()=>A});var S=_(33866),z=_(14068);function T(I){I.extensions.add("GL_EXT_shader_texture_lod"),I.extensions.add("GL_OES_standard_derivatives"),I.fragment.code.add(z.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function A(I,B){I.include(S.D,B),I.fragment.code.add(z.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${B.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===B.attributeTextureCoordinates&&I.fragment.code.add(z.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===B.attributeTextureCoordinates&&(I.include(T),I.fragment.code.add(z.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},59509:(se,H,_)=>{_.d(H,{LC:()=>I,Mo:()=>B});var S=_(14068);_(97004);function T(w){w.vertex.code.add(S.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),w.vertex.code.add(S.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),w.vertex.code.add(S.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),w.vertex.code.add(S.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),w.vertex.code.add(S.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),w.vertex.code.add(S.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),w.vertex.code.add(S.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function I(w,M){const y=w.vertex.code;M.verticalOffsetEnabled?(w.vertex.uniforms.add("verticalOffset","vec4"),M.screenSizePerspectiveEnabled&&(w.include(T),w.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),y.add(S.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===M.viewingMode?S.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:S.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${M.screenSizePerspectiveEnabled?S.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:S.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):y.add(S.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function B(w,M,y){if(!M.verticalOffset)return;const $=function(w,M,y,$=O){return $.screenLength=w.screenLength,$.perDistance=Math.tan(.5*M)/(.5*y),$.minWorldLength=w.minWorldLength,$.maxWorldLength=w.maxWorldLength,$}(M.verticalOffset,y.camera.fovY,y.camera.fullViewport[3]),Q=y.camera.pixelRatio||1;w.setUniform4f("verticalOffset",$.screenLength*Q,$.perDistance,$.minWorldLength,$.maxWorldLength)}const O={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},31971:(se,H,_)=>{_.d(H,{s:()=>$});var S=_(24578),z=_(47393),T=_(77544),A=_(33866),I=_(47068),B=_(17173),L=_(14068);function O(Q,K){Q.fragment.include(B.n),3===K.output?(Q.extensions.add("GL_OES_standard_derivatives"),Q.fragment.code.add(L.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===K.output&&Q.fragment.code.add(L.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var w=_(11576),M=_(49579),y=_(47448);function $(Q,K){const Y=Q.vertex.code,ee=Q.fragment.code;1!==K.output&&3!==K.output||(Q.include(z.w,{linearDepth:!0}),Q.include(A.D,K),Q.include(M.kl,K),Q.include(O,K),Q.include(S.p2,K),Q.vertex.uniforms.add("cameraNearFar","vec2"),Q.varyings.add("depth","float"),K.hasColorTexture&&Q.fragment.uniforms.add("tex","sampler2D"),Y.add(L.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),Q.include(y.sj,K),ee.add(L.H`
      void main(void) {
        discardBySlice(vpos);
        ${K.hasColorTexture?L.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===K.output&&(Q.include(z.w,{linearDepth:!1}),Q.include(T.O,K),Q.include(I.B,K),Q.include(A.D,K),Q.include(M.kl,K),K.hasColorTexture&&Q.fragment.uniforms.add("tex","sampler2D"),Q.vertex.uniforms.add("viewNormal","mat4"),Q.varyings.add("vPositionView","vec3"),Y.add(L.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===K.normalType?L.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),Q.include(S.p2,K),Q.include(y.sj,K),ee.add(L.H`
      void main() {
        discardBySlice(vpos);
        ${K.hasColorTexture?L.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===K.normalType?L.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:L.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===K.output&&(Q.include(z.w,{linearDepth:!1}),Q.include(A.D,K),Q.include(M.kl,K),K.hasColorTexture&&Q.fragment.uniforms.add("tex","sampler2D"),Y.add(L.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),Q.include(S.p2,K),Q.include(y.sj,K),Q.include(w.bA),ee.add(L.H`
      void main() {
        discardBySlice(vpos);
        ${K.hasColorTexture?L.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},11576:(se,H,_)=>{_.d(H,{bA:()=>I,wW:()=>B});var S=_(7731),z=_(14068);const T=(0,S.f)(1,1,0,1),A=(0,S.f)(1,0,1,1);function I(L){L.fragment.uniforms.add("depthTex","sampler2D"),L.fragment.uniforms.add("highlightViewportPixelSz","vec4"),L.fragment.constants.add("occludedHighlightFlag","vec4",T).add("unoccludedHighlightFlag","vec4",A),L.fragment.code.add(z.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function B(L,O){L.bindTexture(O.highlightDepthTexture,"depthTex"),L.setUniform4f("highlightViewportPixelSz",0,0,O.inverseViewport[0],O.inverseViewport[1])}},38105:(se,H,_)=>{_.d(H,{S:()=>T});var S=_(17173),z=_(14068);function T(A){A.include(S.n),A.code.add(z.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},17033:(se,H,_)=>{_.d(H,{Q:()=>T});var S=_(88758),z=_(14068);function T(A,I){const B=A.fragment;I.vertexTangents?(A.attributes.add("tangent","vec4"),A.varyings.add("vTangent","vec4"),2===I.doubleSidedMode?B.code.add(z.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):B.code.add(z.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(A.extensions.add("GL_OES_standard_derivatives"),B.code.add(z.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==I.attributeTextureCoordinates&&(A.include(S.i,I),B.uniforms.add("normalTexture","sampler2D"),B.uniforms.add("normalTextureSize","vec2"),B.code.add(z.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${I.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},78621:(se,H,_)=>{_.d(H,{K:()=>z});var S=_(14068);function z(T,A){const I=T.fragment;A.receiveAmbientOcclusion?(I.uniforms.add("ssaoTex","sampler2D"),I.uniforms.add("viewportPixelSz","vec4"),I.code.add(S.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):I.code.add(S.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},51844:(se,H,_)=>{_.d(H,{X:()=>O});var S=_(14068);function z(w,M){const y=w.fragment,$=void 0!==M.lightingSphericalHarmonicsOrder?M.lightingSphericalHarmonicsOrder:2;0===$?(y.uniforms.add("lightingAmbientSH0","vec3"),y.code.add(S.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===$?(y.uniforms.add("lightingAmbientSH_R","vec4"),y.uniforms.add("lightingAmbientSH_G","vec4"),y.uniforms.add("lightingAmbientSH_B","vec4"),y.code.add(S.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===$&&(y.uniforms.add("lightingAmbientSH0","vec3"),y.uniforms.add("lightingAmbientSH_R1","vec4"),y.uniforms.add("lightingAmbientSH_G1","vec4"),y.uniforms.add("lightingAmbientSH_B1","vec4"),y.uniforms.add("lightingAmbientSH_R2","vec4"),y.uniforms.add("lightingAmbientSH_G2","vec4"),y.uniforms.add("lightingAmbientSH_B2","vec4"),y.code.add(S.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==M.pbrMode&&2!==M.pbrMode||y.code.add(S.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var T=_(78621);function A(w){const M=w.fragment;M.uniforms.add("lightingMainDirection","vec3"),M.uniforms.add("lightingMainIntensity","vec3"),M.uniforms.add("lightingFixedFactor","float"),M.code.add(S.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var I=_(53018),B=_(20988),L=_(35102);function O(w,M){const y=w.fragment;w.include(A),w.include(T.K,M),0!==M.pbrMode&&w.include(I.T,M),w.include(z,M),M.receiveShadows&&w.include(L.hX,M),y.uniforms.add("lightingGlobalFactor","float"),y.uniforms.add("ambientBoostFactor","float"),w.include(B.e),y.code.add(S.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===M.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),y.code.add(S.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===M.viewingMode?S.H`normalize(vPosWorld)`:S.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),y.code.add(S.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===M.pbrMode||4===M.pbrMode?y.code.add(S.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==M.pbrMode&&2!==M.pbrMode||(y.code.add(S.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),y.code.add(S.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),y.code.add(S.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),y.code.add(S.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),y.code.add(S.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===M.pbrMode?S.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:S.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},24850:(se,H,_)=>{_.d(H,{p:()=>T,l:()=>z});var S=_(14068);function z(A,I){A.fragment.uniforms.add("terrainDepthTexture","sampler2D"),A.fragment.uniforms.add("cameraNearFar","vec2"),A.fragment.uniforms.add("inverseViewport","vec2"),A.fragment.code.add(S.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${I.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function T(A,I){I.multipassTerrainEnabled&&I.terrainLinearDepthTexture&&A.bindTexture(I.terrainLinearDepthTexture,"terrainDepthTexture")}},68507:(se,H,_)=>{_.d(H,{k:()=>z});var S=_(14068);function z(T,A){const I=T.fragment;I.code.add(S.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===A.doubleSidedMode?I.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===A.doubleSidedMode?I.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):I.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},53018:(se,H,_)=>{_.d(H,{T:()=>A});var S=_(14068);function z(I){const B=I.fragment.code;B.add(S.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),B.add(S.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),B.add(S.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var T=_(20988);function A(I,B){const L=I.fragment.code;I.include(T.e),3===B.pbrMode||4===B.pbrMode?(L.add(S.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${B.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),L.add(S.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),L.add(S.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),L.add(S.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),L.add(S.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==B.pbrMode&&2!==B.pbrMode||(I.include(z),L.add(S.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),L.add(S.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),L.add(S.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),L.add(S.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),L.add(S.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),L.add(S.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},26435:(se,H,_)=>{_.d(H,{jV:()=>I,nW:()=>B});var S=_(30773),z=_(88758),T=_(14068);(0,S.f)(0,.6,.2);function I(L,O){const w=L.fragment,M=O.hasMetalnessAndRoughnessTexture||O.hasEmissionTexture||O.hasOcclusionTexture;1===O.pbrMode&&M&&L.include(z.i,O),2!==O.pbrMode?(0===O.pbrMode&&w.code.add(T.H`float getBakedOcclusion() { return 1.0; }`),1===O.pbrMode&&(w.uniforms.add("emissionFactor","vec3"),w.uniforms.add("mrrFactors","vec3"),w.code.add(T.H`vec3 mrr;
vec3 emission;
float occlusion;`),O.hasMetalnessAndRoughnessTexture&&(w.uniforms.add("texMetallicRoughness","sampler2D"),O.supportsTextureAtlas&&w.uniforms.add("texMetallicRoughnessSize","vec2"),w.code.add(T.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),O.hasEmissionTexture&&(w.uniforms.add("texEmission","sampler2D"),O.supportsTextureAtlas&&w.uniforms.add("texEmissionSize","vec2"),w.code.add(T.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),O.hasOcclusionTexture?(w.uniforms.add("texOcclusion","sampler2D"),O.supportsTextureAtlas&&w.uniforms.add("texOcclusionSize","vec2"),w.code.add(T.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):w.code.add(T.H`float getBakedOcclusion() { return 1.0; }`),w.code.add(T.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${M?"vtc.uv = vuv0;":""}
      ${O.hasMetalnessAndRoughnessTexture?O.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${O.hasEmissionTexture?O.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${O.hasOcclusionTexture?O.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):w.code.add(T.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function B(L,O,w=!1){w||(L.setUniform3fv("mrrFactors",O.mrrFactors),L.setUniform3fv("emissionFactor",O.emissiveFactor))}},20988:(se,H,_)=>{_.d(H,{e:()=>z});var S=_(14068);function z(T){T.vertex.code.add(S.H`const float PI = 3.141592653589793;`),T.fragment.code.add(S.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},35102:(se,H,_)=>{_.d(H,{hX:()=>T,vL:()=>I});var S=_(17173),z=_(14068);function T(L){L.fragment.include(S.n),L.fragment.uniforms.add("uShadowMapTex","sampler2D"),L.fragment.uniforms.add("uShadowMapNum","int"),L.fragment.uniforms.add("uShadowMapDistance","vec4"),L.fragment.uniforms.add("uShadowMapMatrix","mat4",4),L.fragment.uniforms.add("uDepthHalfPixelSz","float"),L.fragment.code.add(z.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function I(L,O,w){O.shadowMappingEnabled&&O.shadowMap.bindView(L,w)}},49579:(se,H,_)=>{_.d(H,{kl:()=>z,uj:()=>I});var S=_(14068);function z(B,L){L.vvInstancingEnabled&&(L.vvSize||L.vvColor)&&B.attributes.add("instanceFeatureAttribute","vec4"),L.vvSize?(B.vertex.uniforms.add("vvSizeMinSize","vec3"),B.vertex.uniforms.add("vvSizeMaxSize","vec3"),B.vertex.uniforms.add("vvSizeOffset","vec3"),B.vertex.uniforms.add("vvSizeFactor","vec3"),B.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),B.vertex.uniforms.add("vvSymbolAnchor","vec3"),B.vertex.code.add(S.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),B.vertex.code.add(S.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${L.vvInstancingEnabled?S.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):B.vertex.code.add(S.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),L.vvColor?(B.vertex.constants.add("vvColorNumber","int",8),B.vertex.code.add(S.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${L.vvInstancingEnabled?S.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):B.vertex.code.add(S.H`vec4 vvColor() { return vec4(1.0); }`)}function T(B,L){L.vvSizeEnabled&&(B.setUniform3fv("vvSizeMinSize",L.vvSizeMinSize),B.setUniform3fv("vvSizeMaxSize",L.vvSizeMaxSize),B.setUniform3fv("vvSizeOffset",L.vvSizeOffset),B.setUniform3fv("vvSizeFactor",L.vvSizeFactor)),L.vvColorEnabled&&(B.setUniform1fv("vvColorValues",L.vvColorValues),B.setUniform4fv("vvColorColors",L.vvColorColors))}function I(B,L){T(B,L),L.vvSizeEnabled&&(B.setUniform3fv("vvSymbolAnchor",L.vvSymbolAnchor),B.setUniformMatrix3fv("vvSymbolRotationMatrix",L.vvSymbolRotationMatrix))}},47448:(se,H,_)=>{_.d(H,{sj:()=>A,F:()=>z,bf:()=>T});var S=_(14068);const z=.1,T=.001;function A(I,B){const L=I.fragment;switch(B.alphaDiscardMode){case 0:L.code.add(S.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${S.H.float(T)}) { discard; } }
      `);break;case 1:L.code.add(S.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:L.uniforms.add("textureAlphaCutoff","float"),L.code.add(S.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:I.fragment.uniforms.add("textureAlphaCutoff","float"),I.fragment.code.add(S.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},95319:(se,H,_)=>{_.d(H,{$:()=>T,I:()=>A});var S=_(30627),z=_(14068);function T({code:I},B){B.doublePrecisionRequiresObfuscation?I.add(z.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):I.add(z.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function A(I){return!!(0,S.Z)("force-double-precision-obfuscation")||I.driverTest.doublePrecisionRequiresObfuscation}},96119:(se,H,_)=>{_.d(H,{a:()=>T});var S=_(14068),z=_(59450);function T(A,I){const B=S.H`
  /*
  *  ${I.name}
  *  ${0===I.output?"RenderOutput: Color":1===I.output?"RenderOutput: Depth":3===I.output?"RenderOutput: Shadow":2===I.output?"RenderOutput: Normal":4===I.output?"RenderOutput: Highlight":""}
  */
  `;(0,z.CG)()&&(A.fragment.code.add(B),A.vertex.code.add(B))}},94788:(se,H,_)=>{_.d(H,{y:()=>T});var S=_(14068);function z(A){A.code.add(S.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function T(A){A.include(z),A.code.add(S.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${S.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${S.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${S.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${S.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${S.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},17173:(se,H,_)=>{_.d(H,{n:()=>z});var S=_(14068);function z(T){T.code.add(S.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},85137:(se,H,_)=>{_.d(H,{kG:()=>A});const z=_(22345).Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class T{constructor(){this.includedModules=new Map}include(Y,ee){this.includedModules.has(Y)?this.includedModules.get(Y)!==ee&&z.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(Y,ee),Y(this.builder,ee))}}class A extends T{constructor(){super(...arguments),this.vertex=new L,this.fragment=new L,this.attributes=new O,this.varyings=new w,this.extensions=new M,this.constants=new y}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(Y){const ee=this.extensions.generateSource(Y),k=this.attributes.generateSource(Y),oe=this.varyings.generateSource(),Ee="vertex"===Y?this.vertex:this.fragment,rt=Ee.uniforms.generateSource(),ke=Ee.code.generateSource(),it="vertex"===Y?Q:$,Pe=this.constants.generateSource().concat(Ee.constants.generateSource());return`\n${ee.join("\n")}\n\n${it}\n\n${Pe.join("\n")}\n\n${rt.join("\n")}\n\n${k.join("\n")}\n\n${oe.join("\n")}\n\n${ke.join("\n")}`}}class I{constructor(){this._entries=new Map}add(Y,ee,k){const oe=`${Y}_${ee}_${k}`;return this._entries.set(oe,{name:Y,type:ee,arraySize:k}),this}generateSource(){return Array.from(this._entries.values()).map(ee=>`uniform ${ee.type} ${ee.name}${(ee=>ee?`[${ee}]`:"")(ee.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class B{constructor(){this._entries=new Array}add(Y){this._entries.push(Y)}generateSource(){return this._entries}}class L extends T{constructor(){super(...arguments),this.uniforms=new I,this.code=new B,this.constants=new y}get builder(){return this}}class O{constructor(){this._entries=new Array}add(Y,ee){this._entries.push([Y,ee])}generateSource(Y){return"fragment"===Y?[]:this._entries.map(ee=>`attribute ${ee[1]} ${ee[0]};`)}}class w{constructor(){this._entries=new Array}add(Y,ee){this._entries.push([Y,ee])}generateSource(){return this._entries.map(Y=>`varying ${Y[1]} ${Y[0]};`)}}class M{constructor(){this._entries=new Set}add(Y){this._entries.add(Y)}generateSource(Y){const ee="vertex"===Y?M.ALLOWLIST_VERTEX:M.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(k=>ee.includes(k)).map(k=>`#extension ${k} : enable`)}}M.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],M.ALLOWLIST_VERTEX=[];class y{constructor(){this._entries=[]}add(Y,ee,k){let oe="ERROR_CONSTRUCTOR_STRING";switch(ee){case"float":oe=y.numberToFloatStr(k);break;case"int":oe=y.numberToIntStr(k);break;case"bool":oe=k.toString();break;case"vec2":oe=`vec2(${y.numberToFloatStr(k[0])},                            ${y.numberToFloatStr(k[1])})`;break;case"vec3":oe=`vec3(${y.numberToFloatStr(k[0])},                            ${y.numberToFloatStr(k[1])},                            ${y.numberToFloatStr(k[2])})`;break;case"vec4":oe=`vec4(${y.numberToFloatStr(k[0])},                            ${y.numberToFloatStr(k[1])},                            ${y.numberToFloatStr(k[2])},                            ${y.numberToFloatStr(k[3])})`;break;case"ivec2":oe=`ivec2(${y.numberToIntStr(k[0])},                             ${y.numberToIntStr(k[1])})`;break;case"ivec3":oe=`ivec3(${y.numberToIntStr(k[0])},                             ${y.numberToIntStr(k[1])},                             ${y.numberToIntStr(k[2])})`;break;case"ivec4":oe=`ivec4(${y.numberToIntStr(k[0])},                             ${y.numberToIntStr(k[1])},                             ${y.numberToIntStr(k[2])},                             ${y.numberToIntStr(k[3])})`;break;case"mat2":case"mat3":case"mat4":oe=`${ee}(${Array.prototype.map.call(k,Ee=>y.numberToFloatStr(Ee)).join(", ")})`}return this._entries.push(`const ${ee} ${Y} = ${oe};`),this}static numberToIntStr(Y){return Y.toFixed(0)}static numberToFloatStr(Y){return Number.isInteger(Y)?Y.toFixed(1):Y.toString()}generateSource(){return Array.from(this._entries)}}const $="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Q="precision highp float;\nprecision highp sampler2D;"},14068:(se,H,_)=>{function S(z,...T){let A="";for(let I=0;I<T.length;I++)A+=z[I]+T[I];return A+=z[z.length-1],A}var z;_.d(H,{H:()=>S}),(z=S||(S={})).int=function(I){return Math.round(I).toString()},z.float=function(I){return I.toPrecision(8)}},34605:(se,H,_)=>{_.d(H,{hu:()=>M});_(88415),_(60411),_(68292),_(41558),_(33989),_(64617);(0,_(7731).c)();class w{constructor(G){this.message=G}toString(){return`AssertException: ${this.message}`}}function M(F,G){if(!F){G=G||"assert";const ie=new Error(G);throw ie.stack&&console.log(ie.stack),new w(G)}}},97004:(se,H,_)=>{_.d(H,{bj:()=>wt,FZ:()=>Kt,Uf:()=>Ft,Bw:()=>rr,LO:()=>Gt,Hx:()=>Rt});var S=_(88415),z=_(18502),T=_(63702),A=_(33989),I=_(61164);function w(R,U,N){const V=N.parameters,J=N.paddingPixelsOverride;return ke.scale=Math.min(V.divisor/(U-V.offset),1),ke.factor=function(R){return Math.abs(R*R*R)}(R),ke.minPixelSize=V.minPixelSize,ke.paddingPixels=J,ke}function M(R,U){return 0===R?U.minPixelSize:U.minPixelSize*(1+2*U.paddingPixels/R)}function y(R,U){return Math.max((0,S.t7)(R*U.scale,R,U.factor),M(R,U))}(0,S.Vl)(10),(0,S.Vl)(12),(0,S.Vl)(70),(0,S.Vl)(40);const ke={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var Pe=_(34605),ft=(_(60411),_(25336));_(46117);new Float64Array(3),new Float32Array(6),(0,ft.c)();const Wt=(0,I.Ue)();function rr(R,U,N,V,J,he,me){if(!function(R){return!!(0,z.pC)(R)&&!R.visible}(U))if(R.boundingInfo){(0,Pe.hu)(0===R.primitiveType);const de=N.tolerance;G(R.boundingInfo,V,J,de,he,me)}else{const de=R.indices.get("position"),Ce=R.vertexAttributes.get("position");pe(V,J,0,de.length/3,de,Ce,void 0,he,me)}}const F=(0,A.c)();function G(R,U,N,V,J,he){if((0,z.Wi)(R))return;const me=function(R,U,N){return(0,T.s)(N,1/(U[0]-R[0]),1/(U[1]-R[1]),1/(U[2]-R[2]))}(U,N,F);if((0,I.op)(Wt,R.getBBMin()),(0,I.Tn)(Wt,R.getBBMax()),(0,z.pC)(J)&&J.applyToAabb(Wt),function(R,U,N,V){return function(R,U,N,V,J){const he=(R[0]-V-U[0])*N[0],me=(R[3]+V-U[0])*N[0];let de=Math.min(he,me),Ce=Math.max(he,me);const fe=(R[1]-V-U[1])*N[1],Ie=(R[4]+V-U[1])*N[1];if(Ce=Math.min(Ce,Math.max(fe,Ie)),Ce<0||(de=Math.max(de,Math.min(fe,Ie)),de>Ce))return!1;const He=(R[2]-V-U[2])*N[2],We=(R[5]+V-U[2])*N[2];return Ce=Math.min(Ce,Math.max(He,We)),!(Ce<0)&&(de=Math.max(de,Math.min(He,We)),!(de>Ce)&&de<J)}(R,U,N,V,1/0)}(Wt,U,me,V)){const{primitiveIndices:de,indices:Ce,position:fe}=R,Ie=de?de.length:Ce.length/3;if(Ie>kt){const He=R.getChildren();if(void 0!==He){for(let We=0;We<8;++We)void 0!==He[We]&&G(He[We],U,N,V,J,he);return}}pe(U,N,0,Ie,Ce,fe,de,J,he)}}const ie=(0,A.c)();function pe(R,U,N,V,J,he,me,de,Ce){if(me)return function(R,U,N,V,J,he,me,de,Ce){const fe=he.data,Ie=he.stride||he.size,He=R[0],We=R[1],dt=R[2],Ye=U[0]-He,at=U[1]-We,st=U[2]-dt;for(let Xe=N;Xe<V;++Xe){const vt=me[Xe];let Ge=3*vt,Ue=Ie*J[Ge++],et=fe[Ue++],tt=fe[Ue++],lt=fe[Ue];Ue=Ie*J[Ge++];let ot=fe[Ue++],Ut=fe[Ue++],zt=fe[Ue];Ue=Ie*J[Ge];let Ht=fe[Ue++],Bt=fe[Ue++],Ct=fe[Ue];(0,z.pC)(de)&&([et,tt,lt]=de.applyToVertex(et,tt,lt,Xe),[ot,Ut,zt]=de.applyToVertex(ot,Ut,zt,Xe),[Ht,Bt,Ct]=de.applyToVertex(Ht,Bt,Ct,Xe));const pt=ot-et,gt=Ut-tt,_t=zt-lt,xt=Ht-et,St=Bt-tt,Pt=Ct-lt,Yt=at*Pt-St*st,Qt=st*xt-Pt*Ye,mt=Ye*St-xt*at,ct=pt*Yt+gt*Qt+_t*mt;if(Math.abs(ct)<=Number.EPSILON)continue;const Dt=He-et,Le=We-tt,ut=dt-lt,bt=Dt*Yt+Le*Qt+ut*mt;if(ct>0){if(bt<0||bt>ct)continue}else if(bt>0||bt<ct)continue;const Zt=Le*_t-gt*ut,Xt=ut*pt-_t*Dt,nt=Dt*gt-pt*Le,At=Ye*Zt+at*Xt+st*nt;if(ct>0){if(At<0||bt+At>ct)continue}else if(At>0||bt+At<ct)continue;const ir=(xt*Zt+St*Xt+Pt*nt)/ct;ir>=0&&Ce(ir,we(pt,gt,_t,xt,St,Pt,ie),vt,!1)}}(R,U,N,V,J,he,me,de,Ce);const fe=he.data,Ie=he.stride||he.size,He=R[0],We=R[1],dt=R[2],Ye=U[0]-He,at=U[1]-We,st=U[2]-dt;for(let Xe=N,vt=3*N;Xe<V;++Xe){let Ge=Ie*J[vt++],Ue=fe[Ge++],et=fe[Ge++],tt=fe[Ge];Ge=Ie*J[vt++];let lt=fe[Ge++],ot=fe[Ge++],Ut=fe[Ge];Ge=Ie*J[vt++];let zt=fe[Ge++],Ht=fe[Ge++],Bt=fe[Ge];(0,z.pC)(de)&&([Ue,et,tt]=de.applyToVertex(Ue,et,tt,Xe),[lt,ot,Ut]=de.applyToVertex(lt,ot,Ut,Xe),[zt,Ht,Bt]=de.applyToVertex(zt,Ht,Bt,Xe));const Ct=lt-Ue,pt=ot-et,gt=Ut-tt,_t=zt-Ue,xt=Ht-et,St=Bt-tt,Pt=at*St-xt*st,Yt=st*_t-St*Ye,Qt=Ye*xt-_t*at,mt=Ct*Pt+pt*Yt+gt*Qt;if(Math.abs(mt)<=Number.EPSILON)continue;const ct=He-Ue,Dt=We-et,Le=dt-tt,ut=ct*Pt+Dt*Yt+Le*Qt;if(mt>0){if(ut<0||ut>mt)continue}else if(ut>0||ut<mt)continue;const bt=Dt*gt-pt*Le,Zt=Le*Ct-gt*ct,Xt=ct*pt-Ct*Dt,nt=Ye*bt+at*Zt+st*Xt;if(mt>0){if(nt<0||ut+nt>mt)continue}else if(nt>0||ut+nt<mt)continue;const At=(_t*bt+xt*Zt+St*Xt)/mt;At>=0&&Ce(At,we(Ct,pt,gt,_t,xt,St,ie),Xe,!1)}}const ue=(0,A.c)(),Ae=(0,A.c)();function we(R,U,N,V,J,he,me){return(0,T.s)(ue,R,U,N),(0,T.s)(Ae,V,J,he),(0,T.c)(me,ue,Ae),(0,T.n)(me,me),me}function Rt(R,U,N,V,J){let he=(N.screenLength||0)*R.pixelRatio;J&&(he=function(R,U,N,V){return y(R,w(U,N,V))}(he,V,U,J));const me=he*Math.tan(.5*R.fovY)/(.5*R.fullHeight);return(0,S.uZ)(me*U,N.minWorldLength||0,null!=N.maxWorldLength?N.maxWorldLength:1/0)}function wt(R,U,N){if(!R)return;const V=R.parameters,J=R.paddingPixelsOverride;U.setUniform4f(N,V.divisor,V.offset,V.minPixelSize,J)}function Ft(R,U){const N=U?Ft(U):{};for(const V in R){let J=R[V];J&&J.forEach&&(J=$t(J)),null==J&&V in N||(N[V]=J)}return N}function Gt(R,U){let N=!1;for(const V in U){const J=U[V];void 0!==J&&(N=!0,Array.isArray(J)?R[V]=J.slice():R[V]=J)}return N}function $t(R){const U=[];return R.forEach(N=>U.push(N)),U}const Kt={multiply:1,ignore:2,replace:3,tint:4},kt=1e3},36079:(se,H,_)=>{_.d(H,{Z:()=>L});var S=_(88415),z=_(18502),T=_(59450),A=_(42909),I=_(31555);class L{constructor(M,y,$=null){this._context=M,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,M.instanceCounter.increment(A._g.Texture,this),this._descriptor=Mt({target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1},y),34067===this._descriptor.target?this.setDataCubeMap($):this.setData($)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(A._g.Texture,this))}release(){this.dispose()}resize(M,y){const $=this._descriptor;$.width===M&&$.height===y||($.width=M,$.height=y,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(M=null){for(let y=34069;y<=34074;y++)this.setData(M,y)}setData(M,y=3553){if(!this._context||!this._context.gl)return;const $=this._context.gl;this._glName||(this._glName=$.createTexture()),void 0===M&&(M=null),null===M&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const Q=this._context.bindTexture(this,L.TEXTURE_UNIT_FOR_UPDATES),K=this._descriptor;L._validateTexture(this._context,K),$.pixelStorei($.UNPACK_ALIGNMENT,K.unpackAlignment),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,K.flipped?1:0),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.preMultiplyAlpha?1:0);const Y=K.pixelFormat;let ee=K.internalFormat?K.internalFormat:this._deriveInternalFormat(Y,K.dataType);if(M instanceof ImageData||M instanceof HTMLImageElement||M instanceof HTMLCanvasElement||M instanceof HTMLVideoElement){let k=M.width,oe=M.height;M instanceof HTMLVideoElement&&(k=M.videoWidth,oe=M.videoHeight),K.width&&K.height,$.texImage2D(y,0,ee,Y,K.dataType,M),(0,T.zu)($),K.hasMipmap&&this.generateMipmap(),void 0===K.width&&(K.width=k),void 0===K.height&&(K.height=oe)}else{null!=K.width&&null!=K.height||console.error("Width and height must be specified!"),$.DEPTH24_STENCIL8&&ee===$.DEPTH_STENCIL&&(ee=$.DEPTH24_STENCIL8);let k=K.width,oe=K.height;if(w=M,(0,z.pC)(w)&&"type"in w&&"compressed"===w.type){const Ee=Math.round(Math.log(Math.max(k,oe))/Math.LN2)+1;K.hasMipmap=K.hasMipmap&&Ee===M.levels.length;for(let rt=0;;++rt){const ke=M.levels[Math.min(rt,M.levels.length-1)];if($.compressedTexImage2D(y,rt,ee,k,oe,0,ke),1===k&&1===oe||!K.hasMipmap)break;k=Math.max(1,k>>1),oe=Math.max(1,oe>>1)}}else if((0,z.pC)(M))$.texImage2D(y,0,ee,k,oe,0,Y,K.dataType,M),(0,T.zu)($),K.hasMipmap&&this.generateMipmap();else for(let Ee=0;$.texImage2D(y,Ee,ee,k,oe,0,Y,K.dataType,null),(0,T.zu)($),(1!==k||1!==oe)&&K.hasMipmap;++Ee)k=Math.max(1,k>>1),oe=Math.max(1,oe>>1)}var w;L._applySamplingMode($,this._descriptor),L._applyWrapMode($,this._descriptor),L._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,T.zu)($),this._context.bindTexture(Q,L.TEXTURE_UNIT_FOR_UPDATES)}updateData(M,y,$,Q,K,Y,ee=3553){Y||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const k=this._context.gl,oe=this._descriptor,Ee=this._context.bindTexture(this,L.TEXTURE_UNIT_FOR_UPDATES);(y<0||$<0||Q>oe.width||K>oe.height||y+Q>oe.width||$+K>oe.height)&&console.error("An attempt to update out of bounds of the texture!"),k.pixelStorei(k.UNPACK_ALIGNMENT,oe.unpackAlignment),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,oe.flipped?1:0),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.preMultiplyAlpha?1:0),Y instanceof ImageData||Y instanceof HTMLImageElement||Y instanceof HTMLCanvasElement||Y instanceof HTMLVideoElement?k.texSubImage2D(ee,M,y,$,oe.pixelFormat,oe.dataType,Y):k.texSubImage2D(ee,M,y,$,Q,K,oe.pixelFormat,oe.dataType,Y),this._context.bindTexture(Ee,L.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const M=this._descriptor;M.hasMipmap||(M.hasMipmap=!0,this._samplingModeDirty=!0,L._validateTexture(this._context,M)),9729===M.samplingMode?(this._samplingModeDirty=!0,M.samplingMode=9985):9728===M.samplingMode&&(this._samplingModeDirty=!0,M.samplingMode=9984);const y=this._context.bindTexture(this,L.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(M.target),this._context.bindTexture(y,L.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(M){M!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=M,this._samplingModeDirty=!0)}setWrapMode(M){M!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=M,L._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const M=this._context.gl,y=this._descriptor;this._samplingModeDirty&&(L._applySamplingMode(M,y),this._samplingModeDirty=!1),this._wrapModeDirty&&(L._applyWrapMode(M,y),this._wrapModeDirty=!1)}_deriveInternalFormat(M,y){if("webgl"===this._context.webglVersion)return M;if(5126===y)switch(M){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return M}static _validateTexture(M,y){(y.width<0||y.height<0)&&console.error("Negative dimension parameters are not allowed!");const $=(0,S.wt)(y.width)&&(0,S.wt)(y.height);(0,I.Z)(M.gl)||$||("number"==typeof y.wrapMode?33071!==y.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===y.wrapMode.s&&33071===y.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),y.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(M,y){let $=y.samplingMode,Q=y.samplingMode;9985===$||9987===$?($=9729,y.hasMipmap||(Q=9729)):9984!==$&&9986!==$||($=9728,y.hasMipmap||(Q=9728)),M.texParameteri(y.target,M.TEXTURE_MAG_FILTER,$),M.texParameteri(y.target,M.TEXTURE_MIN_FILTER,Q)}static _applyWrapMode(M,y){"number"==typeof y.wrapMode?(M.texParameteri(y.target,M.TEXTURE_WRAP_S,y.wrapMode),M.texParameteri(y.target,M.TEXTURE_WRAP_T,y.wrapMode)):(M.texParameteri(y.target,M.TEXTURE_WRAP_S,y.wrapMode.s),M.texParameteri(y.target,M.TEXTURE_WRAP_T,y.wrapMode.t))}static _applyAnisotropicFilteringParameters(M,y){var $;const Q=M.capabilities.textureFilterAnisotropic;!Q||M.gl.texParameterf(y.target,Q.TEXTURE_MAX_ANISOTROPY,null!=($=y.maxAnisotropy)?$:1)}}L.TEXTURE_UNIT_FOR_UPDATES=0},31555:(se,H,_)=>{function S(z){return window.WebGL2RenderingContext&&z instanceof window.WebGL2RenderingContext}_.d(H,{Z:()=>S})},59450:(se,H,_)=>{_.d(H,{zu:()=>w,hZ:()=>L,CG:()=>O});var S=_(61414),z=_(30627);const A=_(22345).Z.getLogger("esri/views/webgl");const B=!!(0,z.Z)("enable-feature:webgl-debug");function L(){return B}function O(){return B}function w(M){if(L()){const y=M.getError();if(y){const $=function(M,y){switch(y){case M.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case M.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case M.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case M.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case M.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case M.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(M,y),Q=(new Error).stack;A.error(new S.Z("webgl-error","WebGL error occured",{message:$,stack:Q}))}}}},42909:(se,H,_)=>{_.d(H,{Ld:()=>S,Lu:()=>T,_g:()=>z});const S=33984;var z,A;(A=z||(z={}))[A.Texture=0]="Texture",A[A.Buffer=1]="Buffer",A[A.VAO=2]="VAO",A[A.VertexShader=3]="VertexShader",A[A.FragmentShader=4]="FragmentShader",A[A.Program=5]="Program",A[A.Framebuffer=6]="Framebuffer",A[A.Renderbuffer=7]="Renderbuffer",A[A.COUNT=8]="COUNT";const T=33306}}]);
//# sourceMappingURL=9401.40e49f4f1252ca8666ca.js.map