import{r,o as l,c as d,a as t,b as n,w as a,F as c,d as e,e as i}from"./app.c4dc980c.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const u={},_=t("h1",{id:"quick-start",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),e(" Quick start")],-1),g=t("p",null,[e("After installing you should be able to start LunarVim with the "),t("code",null,"lvim"),e(" command.")],-1),p=t("h2",{id:"add-lvim-to-path",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#add-lvim-to-path","aria-hidden":"true"},"#"),e(" Add "),t("code",null,"lvim"),e(" to "),t("code",null,"$PATH")],-1),m=e("If your terminal can't find the "),f=t("code",null,"lvim",-1),b=e(" command, "),v={href:"https://gist.github.com/nex3/c395b2f8fd4b02068be37c961301caa7",target:"_blank",rel:"noopener noreferrer"},k=e("add the installation folder to your path"),x=e(" or move the lvim command to somewhere in your path. The default install folder is "),y=t("code",null,"~/.local/bin",-1),L=e("."),w=i(`<h2 id="tree-sitter" tabindex="-1"><a class="header-anchor" href="#tree-sitter" aria-hidden="true">#</a> Tree-sitter</h2><p>To install syntax highlighting and treesitter support for your language:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall <span class="token operator">&lt;</span>TAB<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>NOTE:</strong> <code>&lt;TAB&gt;</code> indicates that you should press the <code>&lt;TAB&gt;</code> key and cycle through your options</p>`,4),T=e("Not all languages are supported. For a list of supported languages "),A={href:"https://github.com/nvim-treesitter/nvim-treesitter#supported-languages",target:"_blank",rel:"noopener noreferrer"},F=e("look here"),N=i(`<h2 id="language-server" tabindex="-1"><a class="header-anchor" href="#language-server" aria-hidden="true">#</a> Language Server</h2><p>To install a Language Server for your language:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall <span class="token operator">&lt;</span>TAB<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),S=e("Sometimes the language server for your language will not have an obvious name. For instance, the language server for ruby is solargraph. Metals is the language server for scala, etc. To find the corresponding language server for your language "),B={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},I=e("look here"),V=t("h2",{id:"formatting-and-linting",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#formatting-and-linting","aria-hidden":"true"},"#"),e(" Formatting and Linting")],-1),E=t("p",null,"Formatting and Linting is not supported by some LSPs by default. This needs to be installed / configured separately.",-1),q=e("See "),C=e("languages"),O=e(" where each language with its formatting and linting can be addressed."),P=t("h2",{id:"nerd-fonts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nerd-fonts","aria-hidden":"true"},"#"),e(" Nerd Fonts")],-1),R=e("Installing a "),H={href:"https://www.nerdfonts.com/",target:"_blank",rel:"noopener noreferrer"},M=e("nerd font"),Q=e(" is recommended. Otherwise some symbols won't be rendered properly. For more information go to the "),$=e("configuration section "),j=e("."),z=t("h2",{id:"next-steps",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#next-steps","aria-hidden":"true"},"#"),e(" Next Steps")],-1),D=e("Learn how to "),G=e("configure LunarVim"),J=e("Learn about the "),K=e("installed plugins"),U=e("Learn how to set up LunarVim for your "),W=e("language");function X(Y,Z){const s=r("ExternalLinkIcon"),o=r("RouterLink");return l(),d(c,null,[_,g,p,t("p",null,[m,f,b,t("a",v,[k,n(s)]),x,y,L]),w,t("p",null,[T,t("a",A,[F,n(s)])]),N,t("p",null,[S,t("a",B,[I,n(s)])]),V,E,t("p",null,[q,n(o,{to:"/languages/"},{default:a(()=>[C]),_:1}),O]),P,t("p",null,[R,t("a",H,[M,n(s)]),Q,n(o,{to:"/configuration/04-nerd-fonts.html"},{default:a(()=>[$]),_:1}),j]),z,t("ul",null,[t("li",null,[D,n(o,{to:"/configuration/"},{default:a(()=>[G]),_:1})]),t("li",null,[J,n(o,{to:"/plugins/"},{default:a(()=>[K]),_:1})]),t("li",null,[U,n(o,{to:"/languages/"},{default:a(()=>[W]),_:1})])])],64)}var ne=h(u,[["render",X]]);export{ne as default};