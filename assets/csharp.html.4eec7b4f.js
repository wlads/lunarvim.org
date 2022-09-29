import{r as s,o as r,c as i,a as e,b as t,F as o,e as l,d as a}from"./app.c4dc980c.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const h={},d=l(`<h1 id="c-csharp" tabindex="-1"><a class="header-anchor" href="#c-csharp" aria-hidden="true">#</a> C# (csharp)</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall c_sharp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall <span class="token keyword">c</span>#
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2>`,6),p=a("The csharp language server OmniSharp supports formatting. Formatting is automatically enabled by installing the csharp language server. The formatting options can be changed by with the "),m={href:"https://github.com/OmniSharp/omnisharp-roslyn/wiki/Configuration-Options",target:"_blank",rel:"noopener noreferrer"},g=a("OmniSharp configuration options"),u=a("."),_={href:"https://www.electronjs.org/docs/development/clang-format",target:"_blank",rel:"noopener noreferrer"},f=a("clang-format"),b=a(" can optionally be used as a C# formatter. After installing the "),v=e("code",null,"clang-format",-1),x=a(" the formatter is enabled with configuration. OmniSharp formatter is then automatically disabled.");function k(y,S){const n=s("ExternalLinkIcon");return r(),i(o,null,[d,e("p",null,[p,e("a",m,[g,t(n)]),u]),e("p",null,[e("a",_,[f,t(n)]),b,v,x])],64)}var O=c(h,[["render",k]]);export{O as default};