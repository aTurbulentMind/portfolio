<body>

    <header>
    <h1>Newsletter</h1>
    <h2>xx/xx/xxxx</h2>
    </header>
    
<div class="feature">
  <div class="feature-item">
    <h2>Full Trust Accounting</h2>
    <p class="feature-text">Debt$Net® maintains an up-to-date trust account. It handles debtor payments, adjustments, NSF reversals, client payments, set up fees, trust account adjustment, direct payments, forward commissions and direct payment invoices. You can even place a hold on debtor payments you suspect will not clear the bank so you do not pay your client prematurely.</p>
  </div>
  
  <div class="feature-item">
    <h2>Client Statement</h2>
    <p class="feature-text">Debt$Net® is flexible in the production of statements and the handling of your clients' accounts. You can close the billing period and produce statements as.</p>

    <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, natus.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem praesentium non illo consectetur?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, necessitatibus ea!</li>
        </ul>
    
    <img src="img/client-ac.png" alt="">
  </div>
  
  <div class="feature-item">
    <h2>Definable Client Commission Structures</h2>
    <p class="feature-text">Debt$Net® lets you create variable rate commission formulas to match how you do business with each of your clients. You can base your formulas on the account age, amount assigned, average monthly client volume, flat fee or payments received.</p>
  </div>

  <div class="feature-item">
    <h2>Unlimited Contact Notes</h2>
    <p class="feature-text">Debt$Net® provides unlimited contact notes. Collectors are allowed to add new notes, but not modify old entries. The administrative staff has unrestricted access to all contact notes. Stamping date, time and initials of the collector into the notes provides an audit trail when updating critical data such as status of the account and entering contact notes.</p>
  </div>
  
  <div class="feature-item">
    <h2>Definable Client Commission Structures</h2>
    <p class="feature-text">Debt$Net® lets you create variable rate commission formulas to match how you do business with each of your clients. You can base your formulas on the account age, amount assigned, average monthly client volume, flat fee or payments received.</p>
  </div>

</body>


<style lang="scss">

    @import 'components';

    header{
        border-bottom: 8px dashed $extra;
        padding: 0 9% 0 55%;

        h1{
            font-size:4vw;
        }

        h2{
            font-size:3.5vw;
        }
    }
    
    
    .feature {
    max-width: 1100px;
    margin: 5% auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2%; 
    
    h2{
        font-size: 1.75vw;
    }
}

.feature-item {
    background:#0a327610;
    box-shadow: 0 3px 8px 3px $backgroundHallow;
    height: fit-content;
    contain: content;    
    margin: 7% 1%;
    line-height: 1.7;
    overflow: hidden;
    border-radius: 7px;

    img{
        max-width: 100%;
    }
    
    ul{
      list-style-image: url('img/client-ac.png');
    }

    li{
      font-size: 1.2vw;
      margin: 2% 15%;
    }
}

.feature-text{
    font-size:1.25vw;
}



@media (max-width: 991px) {

        .feature {
    margin: 10px 13%;
    gap: 4%;
    padding: 10px;

        h2{
      font-size: 2.25vw;
    }
    }

    .feature-item{
      margin: 6% 2%;
    }

        .feature-text {
            
                font-size: 2vw;
            
        }
      }

      @media (max-width: 768px) {
           .feature {
    margin: 5%;
    gap: 0;
    padding: 10px;

        h2{
      font-size: 4.5vw;
    }
    }

    .feature-item{
      margin: 12% 2%;
    }

        .feature-text {
            
                font-size: 3.5vw;
            
        }

      
      }
</style>