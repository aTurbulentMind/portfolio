
<body>
    
<h1>The Empty Account Articles</h1>

    <articles>
        <a href="/blog/gottaStart/">
        <article>
            <h2>Gotta start.</h2>
            
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
            max-height: 100vh;
            margin: 1%;
        }
    }

</style>