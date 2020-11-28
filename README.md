###This is a test build of a new set of css principles.
I've leveraged **every layout** organisation ideas combined with my own styling. The idea is to create powerful CSS that is scalable and fast to write, I've done a few experiments with CSS applications in JavaScript Frameworks. And i think keeping CSS and JavaScript seperate is the best idea. Some of the component stuff does look powerful, but I'm unsure about it's effect on writing clean semantic markup.
A interesting part of this project is gorko, which is used to rapidly create utility classes based on CSS variables.

Pages are built upon the idea of grid rows, with the following structure.
````html
<article class="grid-row"> 
    <section class="grid"><!-- automatic column number -->
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>  
    </section>
</article>
```` 
Any HTML elements can be used with the same class set up
````html
<header class="grid-row"> 
    <nav class="grid">
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>  
    </nav>
</header>
```` 
Successive rows can be used to create whole pages
```html
<article class="grid-row">
    <section id="title" class="grid">
        <div><!-- --></div> 
    </section>
    <section id="text" class="grid">
        <figure><!-- --></figure> 
        <div><!-- --></div>  
    </section>
    <section id="gallery" class="grid">
        <figure><!-- --></figure> 
        <figure><!-- --></figure> 
        <figure><!-- --></figure> 
        <figure><!-- --></figure> 
    </section>
</article>
```
`.grid-row` is a wrapper for as many `.grid` elements as you want. Each `.grid` element can be set to a different widths: `standard`, `alignwide` & `alignfull`. Each row sits on a 14 column grid, 12 hav fixed width, and the two outermost spread to as large a possible.

This approach allows flexibility when building up pages with combinations of coloured backgrounds and different margins.

By default they are set to the `standard` width.
```html
<article class="grid-row">
    <section class="grid ">
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>
    </section>
    <section class="grid alignwide">
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>
    </section>
    <section class="grid alignfull">
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>
    </section>
</article>
```
The `.grid` automatically sets the column number to match the number of child siblings with a minimum width of 250px
````html    
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
````
Whereas the `.grid-layout` class name, which can be used in the place of `.grid` will allow you to set fixed column structures, such as:
```html
<article class="grid-row">
    <section class="grid-layout"> <!-- By default it will set up one column -->
        <div><!-- --></div> 
    </section>
</article>
```
These classes can be used to enforce column structures
```html
.has-one-column, .has-two-columns, .has-three-columns, .has-four-columns etc..
```
```html
<article class="grid-row">
    <section class="grid-layout has-two-columns"> 
        <div><!-- --></div> 
    </section>
</article>
```
