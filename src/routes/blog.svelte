
<body>
    
<h1>The Empty Account Articles</h1>

    <articles>
        
        <a href="/blog/sizeMatters/">
        <article>
            <h2>Inspiration Through inspiring 5/2/22</h2>
            
            <img src="/blogPic/sizeMatters/onethree.png" alt="completed deploy">
            
        </article>   
        </a>
        
        <a href="/blog/inspirationthroughinspiring/">
        <article>
            <h2>Inspiration Through inspiring 5/2/22</h2>
            
            <img src="/blogPic/inspirationThroughInspiring/insp.jpg" alt="sitting siamese cat">
            
        </article>   
        </a>

        <a href="/blog/yourawizard/">
        <article>
            <h2>You're a wizard!? 4/25/22</h2>
            
            <img src="/img/wiz.jpg" alt="sitting siamese cat">
            
        </article>   
        </a>

        <a href="/blog/whoru/">
        <article>
            <h2>Who r U? 4/18/22</h2>
            
            <img src="/img/mixed2.png" alt="mixed face happy and sad">
            
        </article>   
        </a>

        <a href="/blog/gottaStart/">
        <article>
            <h2>Gotta start. 4/11/22</h2>
            
            <img src="/img/carfive.jpg" alt="damage to my car from an accident">
            
        </article>   
        </a>

    </articles>

</body>

<style lang="scss"> 

    @import 'components';

    articles{
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        contain: content;
        gap: 3%;
        margin:8%;

        article{
            @include glassBack();
            border:solid 1px purple;
            
        }

        img{
            max-height: 100%;
            max-width: 100%;
            margin-bottom: -3%;
        }
    }

</style>