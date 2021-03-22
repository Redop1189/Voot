addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

    var input_id = new URL(request.url).pathname

    var input_req = new URL(request.url).searchParams.get('url')

    const streamUrl =
  'https://cdnapisec.kaltura.com/p/1982551/playManifest/pt/https/f/applehttp/t/web/e/';


    if (input_id == "/" && input_req == null) {

        const html = `<!DOCTYPE html>
    <html>
<head>
<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="It is a VOOT Online Select streamer with all features">
    <meta name="author" content="Prathamesh Pawar">
    <meta name="copyright" content="This Created by Prathamesh Pawar">
    <meta name="robots" content="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="https://www.voot.com/favicon.ico">

  <title>Prathamesh Pawar | VOOT Online Player !!</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/vstyle.css">
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/v1style.css">

<style>
body{ background-color:#202020;}

</style>

</head>
<body>

  <h1 style="color:orange; text-align:center; font-family: 'Poppins', cursor: pointer;"><a href="https://voot.movietrigger.workers.dev">VOOT Streamer </a></h1>
  
<br><br><h3 style="text-align: center; color: #FFB200; font-family: 'Poppins', cursive; font-size: 17px;"> Enter Your VOOT URL or VIDEO ID Below 👇 <br>And Click On STREAM</h3><br><br><br>

  <div><form method="get"  action="https://voot.movietrigger.workers.dev" _lpchecked="1">
  <center>
 <div class="bar">
<input type="search" class="searchbar" name="url" value="" placeholder="Enter VOOT URL or VIDEO ID" autocomplete="off">
<a href="https://voot.com/"> <img class="voot" src="https://www.voot.com/images/Voot-Logo.svg" width="35px" title="Go To VOOT Site"></a>
</div>

<button  class="button" type="submit" value="" title="Stream And Enjoy !!">
Stream
</button>
<br><br><br><br><br><br><br><br><br>



<footer class="footer">
            <div class="container">
                <span class="copyright"><a style="text-decoration: none; color: #9C9AB3;" href="https://avipatilweb.me/">© 2021 Prathamesh Pawar</a></span>
            </div>
        </footer>
</body>
</html>`

        return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })

    } else {
        if (input_id == "/") {
            var id = input_req.split("/").pop()
        } else {
            var id = input_id.replace("/", "")
        }

    var result = await fetch(`https://wapi.voot.com/ws/ott/getMediaInfo.json?platform=Web&pId=2&mediaId=${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var result = await result.json()


    // Error 400 Code 

        const erhtml = `<!DOCTYPE html>
    <html>
<head>
<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="It is a VOOT Online Select streamer with all features">
    <meta name="author" content="Prathamesh Pawar">
    <meta name="copyright" content="This Created by Prathamesh Pawar">
    <meta name="robots" content="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="https://www.voot.com/favicon.ico">

  <title>Not Found | Prathamesh Pawar | VOOT Online Player !!</title>
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/vstyle.css">
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/v1style.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Mali:wght@300&display=swap" rel="stylesheet">

<style>
body{ background-color:#202020;}
</style>

</head>
<body>
  <h1 style="color:orange; text-align:center; cursor: pointer;"><a href="https://voot.movietrigger.workers.dev">VOOT HLS Streamer </a></h1>
  
<br><br>
<p style="color:#0EEEBB; text-align:center;font-family: 'Corben', cursive; font-size: 19px;">⚠️ ERROR NOT FOUND ⚠️</p>
<h3 style="text-align: center; color: #FFB200; font-family: 'Mali', cursive; font-size: 17px;">Please Check Your VOOT URL or VIDEO ID </h3>

<br><br><br>

  <div><form method="get"  action="https://voot.movietrigger.workers.dev" _lpchecked="1">
  <center>
 <div class="bar">
<input type="search" class="searchbar" name="url" value="" placeholder="Enter VOOT URL or VIDEO ID" autocomplete="off">
<a href="https://voot.com/"> <img class="VOOT" src="https://www.voot.com/images/Voot-Logo.svg" width="35px" title="Go To VOOT Site"></a>
</div>

<button  class="button" type="submit" value="" title="Stream And Enjoy !!">
Stream
</button>
<br><br><br><br>


<footer class="footer">
            <div class="container">
                <span class="copyright"><a style="text-decoration: none; color: #9C9AB3;" href="https://avipatilweb.me/">© 2021 Prathamesh Pawar</a></span>
            </div>
        </footer>
</body>
</html>`


    if (!result) {
        return new Response(erhtml, {
                status: 400,
                headers: ({
                    "Content-Type": "text/html",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Access-Control-Allow-Origin": "*",
                    "Made-By": "https://github.com/Redop1189/Voot/"
            })
        })

    } else {
        var pass = ({
            vID: result.assets.MediaID,
            title: result.assets.MediaName,
            img: result.assets.Pictures[0].URL.replace("https://viacom18-res.cloudinary.com/image/upload/f_auto,q_auto:eco,fl_lossy/kimg", "https://kimg.voot.com"),
            desc: result.assets.Metas[1].Value,
            vurl: streamUrl + result.assets.EntryId


        })

        return new Response(await template(pass.title, pass.img, pass.vurl, pass.vID, pass.desc), {
                status: 200,
                headers: ({
                    "Content-Type": "text/html",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Access-Control-Allow-Origin": "*",
                    "Made-By": "https://github.com/Redop1189/Voot/"
                })
            })
      }
}
async function template(title, img, vurl, vID, desc) {
    return `<html>

<head>
  <title>${title} | Prathamesh Pawar</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <link rel="shortcut icon" type="image/x-icon" href="https://www.voot.com/favicon.ico">
  <link rel="stylesheet" href="https://cdn.plyr.io/3.6.2/plyr.css" />
  <link href="https://fonts.googleapis.com/css?family=Poppins|Quattrocento+Sans" rel="stylesheet"/>
  <script src="https://cdn.plyr.io/3.6.3/plyr.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/hls.js"></script>
</head>
<style>
html {
  font-family: Poppins;
  background: #000;
  margin: 0;
  padding: 0
}

.loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 9999;
    }
    
    .loading-text {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        width: 100%;
        height: 100px;
        line-height: 100px;
    }
    
    .loading-text span {
        display: inline-block;
        margin: 0 5px;
        color: #00b3ff;
        font-family: 'Quattrocento Sans', sans-serif;
    }
    
    .loading-text span:nth-child(1) {
        filter: blur(0px);
        animation: blur-text 1.5s 0s infinite linear alternate;
    }
    
    .loading-text span:nth-child(2) {
        filter: blur(0px);
        animation: blur-text 1.5s 0.2s infinite linear alternate;
    }
    
    .loading-text span:nth-child(3) {
        filter: blur(0px);
        animation: blur-text 1.5s 0.4s infinite linear alternate;
    }
    
    .loading-text span:nth-child(4) {
        filter: blur(0px);
        animation: blur-text 1.5s 0.6s infinite linear alternate;
    }
    
    .loading-text span:nth-child(5) {
        filter: blur(0px);
        animation: blur-text 1.5s 0.8s infinite linear alternate;
    }
    
    .loading-text span:nth-child(6) {
        filter: blur(0px);
        animation: blur-text 1.5s 1s infinite linear alternate;
    }
    
    .loading-text span:nth-child(7) {
        filter: blur(0px);
        animation: blur-text 1.5s 1.2s infinite linear alternate;
    }
    
    @keyframes blur-text {
        0% {
            filter: blur(0px);
        }
        100% {
            filter: blur(4px);
        }
    }

    .plyr__video-wrapper::before {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
        content: '';
        height: 35px;
        width: 35px;
        background: url('https://telegra.ph/file/22da4d29204c748a526a4.png') no-repeat;
        background-size: 35px auto, auto;
    }

</style>

<body>
  <div id="loading" class="loading">
<div class="loading-text">
    <span class="loading-text-words">A</span>
    <span class="loading-text-words">V</span>
    <span class="loading-text-words">I</span>
    <span class="loading-text-words">S</span>
    <span class="loading-text-words">H</span>
    <span class="loading-text-words">K</span>
    <span class="loading-text-words">A</span>
    <span class="loading-text-words">R</span>
</div>
</div>

  <video controls crossorigin poster="${img}" playsinline>
    <source type="application/x-mpegURL" src="${vurl}"> </video>
</body>
<script>
  setTimeout(videovisible, 4000)

function videovisible() {
    document.getElementById('loading').style.display = 'none'
}

document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector("video"),
    n = e.getElementsByTagName("source")[0].src,
    o = {};
  if(Hls.isSupported()) {
    var config = {
      maxMaxBufferLength: 100,
    };
    const t = new Hls(config);
    t.loadSource(n), t.on(Hls.Events.MANIFEST_PARSED, function(n, l) {
      const s = t.levels.map(e => e.height);
      o.quality = {
        default: s[0],
        options: s,
        forced: !0,
        onChange: e => (function(e) {
          window.hls.levels.forEach((n, o) => {
            n.height === e && (window.hls.currentLevel = o)
          })
        })(e)
      };
      new Plyr(e, o)
    }), t.attachMedia(e), window.hls = t
  } else {
    new Plyr(e, o)
  }
});
</script>

</html>`
}
}
