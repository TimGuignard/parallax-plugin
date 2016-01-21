# parallax-plugin
An awesome parallax plugin. Easy to use!

##demo
http://timguignard.com/lab/timguignard-parallax-plugin/

##How to use :
First: import the plugin:
```
<script src="js/timguignard.parallax/timguignard.parallax-min.js"></script>
```

The plugin can be used on every element (img, div...)

define a class you will use for it (in the exemple, 'parallax')

Define the speed : data-speed-parallax="9", if you don't, default is 2.
0 is very fast
100 is almost motionless
-2 will make it go down



####HTML :
```
<img src="assets/images/gallery-1.jpg" alt="" class="img-1 parallax" data-speed-parallax="9">
```

####JS :
```
$(".parallax-noSnap").timGuignardParallax();
```

or with options :
```
$(".parallax").timGuignardParallax({
    snapEffect : true, //Default : true => allow Snap Effect
    heightForSnap : 300, //If snap Effect, number of pixel from where the element appers
    position: 'absolute' //Default: relative => other value: false, 'relative', 'fixed'
});
```


