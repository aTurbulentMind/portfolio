<body>

    <h1>Extra's Page</h1>

    <h2>Things you can find here</h2>

  <ul>
      
  <li class="dropdown">
    <a href="#skip" class="dropbtn">Newsletter</a>
    </li>
  <li class="dropdown">
    <a href="#dePay" class="dropbtn">Events</a>
  </li>
  <li class="dropdown">
    <a href="#deCont" class="dropbtn">Request a demo</a>
  </li>
  
</ul>

    <br><br><br><br>

<h2>Newsletter</h2>

<p>Keep up to date with the goins on of the great god Amway! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis cum voluptatem. Corrupti, esse perspiciatis reprehenderit natus incidunt consequatur quos enim voluptate inventore laboriosam aperiam dicta suscipit rem ipsum eius!</p>

<p><a href="/first/"> Join Us. Jump into the void. </a></p>


<h2>Events</h2>

<p>
    Upcoming events to be anounced.
</p>


<h2>Request a demo</h2>

    <p>If you feel Debt$Net® Collection Software may meet your needs, please fill out the download request form. We can then send you a link for a fully functional copy of either Debt$Ne®t Power or Debt$Net® Prestige to explore on a 30-day trial basis. Guided Walk-Thrus of the software can also be arranged by calling <a href="tel: +8005528397/">1-800-552- 8397</a></p>


    
   
    <container>
        
        <form action="https://formsubmit.co/joelkrivers@yahoo.com" method="POST">
            <wrapper>
                <box>
                    <input type="text" name="fname" id="fname" required>
                    <label for="fname">First and Last Name</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="email" id="email" required>
                    <input type="hidden" name="_next" value="https://tender-benz-1741cd.netlify.app/">
                    <label for="email">Email</label>

                </box>
            </wrapper>

           

            <wrapper>
                <box>
                    <input type="text" name="tel" id="tel" required>
                    <label for="tel">Telephone</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="comp" id="comp" required>
                    <label for="comp">Company Name</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="sta" id="sta" required>
                    <label for="tel">State</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <textarea id="mes" required></textarea>
                    <label for="mes">Comments</label>
                </box>
            </wrapper>
            
            <div class="section1">
            <wrapper>
                <box>
                    <div class="flex-row">
                      
                    <p>yes </p> <input type="checkbox" name="check1" id="chk" required>
                      
                     <p>no</p><input type="checkbox" name="check2" id="chk" required>
                     
                    <label for="chk">&nbsp; Free eval form:</label>
                    </div>
                </box>
                
            </wrapper>
            </div>

            <div class="section1">
            <wrapper>
                <box>
                    <div class="flex-row">
                      
                   <p>legal &nbsp;&nbsp; </p> <input type="checkbox" name="check1" id="chk" required> 
                      <p>medical &nbsp;&nbsp;</p> 
                    <input type="checkbox" name="check2" id="chk" required>
                     
                     <p>1stparty &nbsp;&nbsp;</p>
                    <input type="checkbox" name="check2" id="chk" required>
                      
                      <p>retail &nbsp;&nbsp;</p>
                    <input type="checkbox" name="check2" id="chk" required>
                      
                      <p>check &nbsp;&nbsp;</p>
                    <input type="checkbox" name="check2" id="chk" required>
                      
                      <p>commercial &nbsp;&nbsp;</p>
                    <input type="checkbox" name="check2" id="chk" required>
                      
                      <p>portfolio purchase &nbsp;&nbsp;</p>
                    <input type="checkbox" name="check2" id="chk" required>
                      
                      <p>precollect &nbsp;&nbsp; </p>
                    <input type="checkbox" name="check2" id="chk" required>
                     
                    <label for="chk">&nbsp; Type of collection agency:</label>
                    </div>
                </box>
                
            </wrapper>
            </div>
       

          <!-- <input type="submit" name="" value="sedn">--> 
            <button type="submit">Submit</button>
        </form>
    </container>


</body>

<style lang="scss">
    @import 'components';

h1{
    margin-top: 5%;
}

    
ul {
  float: right;
  list-style-type: none;
  margin:4% 17%;
  overflow: hidden;
  background-color: $extra;
  border-radius: 3px;
  box-shadow: 0 3px 8px 3px $textMain;
}

li {
  float: left;
}

li a, .dropbtn {
  
  color: $backgroundMain;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  color: $highlight;
}

li.dropdown {
  display: inline-block;
}

.dropdown:hover {
  display: block;
}



    container{
        
        color: $backgroundMain;
        

        h2{
        
        font-size: 3vw;
        text-align: center;
        grid-column: 1 / span 2;
    }

        p{
          margin:1% 5%;
          text-transform: capitalize;
        }

    form{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        background: $extra;
        width: 75%;
        margin:8%;
        padding: 4%;
        border-radius:4px;
    }

    wrapper{
        width: 100%;
        display: grid;
        grid-gap:30px;
        gap:30px;
    }

    box{
        width: 100%;
        position: relative;
        padding: 20px;
    }

    input,
    textarea{
        width: 90%;
        font-size: 2vw;
        background: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid $textMain;
        transition:0.3s linear;
    }

    input:focus,
    input:valid,
    textarea:focus,
    textarea:valid{
        padding: 10px;
        background: $backgroundSecond;
        margin: 10px;
        border-radius:4px;
    }

    label{
        position: absolute;
        top: 0;
        left: 0;
        color: $backgroundSecond;
        font-size: 2vw;
        font-weight: bold;
        padding: 20px;
        transition: 0.3s linear;
    }

    input:focus ~ label,
    input:valid ~ label,
    textarea:focus ~ label,
    textarea:valid ~ label{
        padding: 0;
    }

    .section1{
        checkbox{
            padding-top: 50px;
        }

        input{
            accent-color: $highlight;
            block-size: 65px;
            inline-size:20px;
        }

        input:focus,
        input:valid,
        textarea:focus,
        textarea:valid{
        padding: 0.5px;
        margin: 0.5px;
    }
    }

    .flex-row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        
        label {
            padding: 0 10px;
        }
    }
    }


    button{
        background: rgba(16, 15, 17, 0.616);
        outline: none;
        font-weight: 100;
        letter-spacing: 2px;
        border: 1px solid $extra;
        border-radius:4px;
        color: $backgroundMain;
        text-transform: uppercase;
        padding: 10px;
        margin:0;
        grid-column: 1 / span 2;

        &:hover {
           transition: all 0.2s ease-in-out;
        background: $textMain;
        color: $backgroundMain;
        transform: scale(1.05);
        }
 }

    

</style>