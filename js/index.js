  
   function showContent() {
    var category = document.getElementById("btn").value;
    var formContainer = document.getElementById("form-container");
  
    // Reset form container
    formContainer.innerHTML = '';
    console.log(category);
  
    // Show appropriate form based on category
    switch(category) {
      case "Pizza":
        formContainer.innerHTML = `
        <form>
            
            <div class="right1">
            <div class="iteme">
                <h1 class="titrei">Pizza mexicane</h1>
                <h3>sauce mexicane picante, fromage, olive, poulet, poulet fumé</h3>
                <h3><span class="prix">650 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Reine</h1>
                <h3>sauce tomate, fromage, olive, poulet, viande hachee</h3>
                <h3><span class="prix">700 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza delice</h1>
                <h3>base creme, fromage, olive, poulet, poulet fumé</h3>
                <h3><span class="prix">1000 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza La flame</h1>
                <h3>Csauce mexicane picante, fromage, olive, viande hachee, viande fumé, merguez, gouda</h3>
                <h3><span class="prix">800 da</span> </h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Quatre Fromage</h1>
                <h3>gouda, fromage rouge, mozzarella, camembert</h3>
                <h3><span class="prix">850 da</span> </h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Quatre viande</h1>
                <h3>sauce tomate, mozzarella, poulet, poulet fumé, viande hachee, merguez, sauce bbq</h3>
                <h3><span class="prix">850 da</span> </h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Demi</h1>
                <h3>Demi delice, demi la flame</h3>
                <h3><span class="prix">950 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Chef</h1>
                <h3>sauce gruyere, gruyere, poulet, viande hachee, viande fumé</h3>
                <h3><span class="prix">1000 da</span></h3>
            </div><br>
            
        </div>
        <div class="vl"></div>
        <div class="left1" style="width: 50%;">
            <div class="iteme">
                <h1 class="titrei">Pizza Margurita</h1>
                <h3>sauce tomate, fromage, olive</h3>
                <h3><span class="prix">400 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza vigitarienne</h1>
                <h3>sauce tomate, fromage, olive, poivron, oingnon</h3>
                <h3><span class="prix">450 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Poulet</h1>
                <h3>sauce tomate, fromage, olive, poulet </h3>
                <h3><span class="prix">500 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Orientale</h1>
                <h3>sauce tomate, fromage, olive, merguez</h3>
                <h3><span class="prix">500 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Viande hachee</h1>
                <h3>sauce tomate, fromage, olive, viande hachee</h3>
                <h3><span class="prix">550 da</span></h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Thon</h1>
                <h3>sauce tomate, fromage, olive, thon</h3>
                <h3><span class="prix">600da</span> </h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Fermiere</h1>
                <h3>base creme, fromage, olive, poulet</h3>
                <h3><span class="prix">600 da</span> </h3>
            </div><br>
            <div class="iteme">
                <h1 class="titrei">Pizza Fumé</h1>
                <h3>sauce tomate, fromage, olive, viande hachee fumé</h3>
                <h3><span class="prix">600 da</span> </h3>
            </div><br>
        </div>
        <img class="younes" src="/images/pi.png" style="height:1980px">
          </form>
        `;
        break;
      case "sandwich":
        formContainer.innerHTML = `
        <form>
            
        </form>
        `;
        break;
        default:
        formContainer.style.display = "none";
      }
      if(category !== "none") {
        formContainer.style.display = "block";
      } else {
        formContainer.style.display = "none";
      }
    }

    function showContent1() {
      var category = document.getElementById("btn1").value;
      var formContainer = document.getElementById("form-container");
    
      // Reset form container
      formContainer.innerHTML = '';
      console.log(category);
    
      // Show appropriate form based on category
      switch(category) {
        case "Sandwich":
          formContainer.innerHTML = `
          <form>
              <div class="right1">
              <div class="iteme">
                  <h1 class="titrei">Sandwich Mixte</h1>
                  <h3>poulet, Viande hachee, Frites, Salade, Tomate</h3>
                  <h3><span class="prix">450 da</span></h3>
              </div><br>
              <div class="iteme">
                  <h1 class="titrei">Sandwich Le boursin</h1>
                  <h3>Pain maison, Sauce maison, Steak hachee boursin, Frites</h3>
                  <h3><span class="prix">450 da</span></h3>
              </div><br>
              <div class="iteme">
                  <h1 class="titrei">Sandwich Délicieux</h1>
                  <h3>Poulet a la creme, Mozza, Poulet fumé, Frites, Sauce fromage</h3>
                  <h3><span class="prix">450 da</span></h3>
              </div><br>
              <div class="iteme">
                  <h1 class="titrei">Sandwich Méxicain boeuf</h1>
                  <h3>Steak, Poivrons, Onignon, Tomate, Frites</h3>
                  <h3><span class="prix">600 da</span> </h3>
              </div><br>
              <div class="iteme">
                  <h1 class="titrei">Sandwich Suisse</h1>
                  <h3>Pain maison, Poulet pané, Poulet fumé, Greuyere, Champingon, Frites, Sauce greuyere</h3>
                  <h3><span class="prix">600 da</span> </h3>
              </div><br>
              
              
          </div>
          <div class="vl1"></div>
          <div class="left1" style="width: 50%;">
              <div class="iteme">
                  <h1 class="titrei">Sandwich Poulet Epice</h1>
                  <h3>Poulet, Frites, Salade, Tomate </h3>
                  <h3><span class="prix">350 da</span></h3>
              </div><br>
              <div class="iteme">
                  <h1 class="titrei">Sandwich Viande Hachee</h1>
                  <h3>Viande hachee, Frites, Salade, Tomate</h3>
                  <h3><span class="prix">550 da</span></h3>
              </div><br>
              <div class="iteme">
                  <h1 class="titrei">Sandwich Escalope</h1>
                  <h3>Escalope de dinde, Frites, Salade, Tomate</h3>
                  <h3><span class="prix">600da</span> </h3>
              </div><br>
              <div class="iteme">
                  <h1 class="titrei">Sandwich Mergeuz</h1>
                  <h3>Mergeuz, Frites, Salade, Tomate, fromage</h3>
                  <h3><span class="prix">400 da</span></h3>
              </div><br>
              <div class="iteme">
                  <h1 class="titrei">Sandwich Méxicain</h1>
                  <h3>Frites, Poulet, Tomate, poivron, oingnon</h3>
                  <h3><span class="prix">450 da</span></h3>
              </div><br>
              <img class="younes" src="/images/sand.png" alt="">
            </form>
          `;
          
          break;
          default:
          formContainer.style.display = "none";
        }
        if(category !== "none") {
          formContainer.style.display = "block";
        } else {
          formContainer.style.display = "none";
        }
      }

      function showContent2() {
        var category = document.getElementById("btn2").value;
        var formContainer = document.getElementById("form-container");
      
        // Reset form container
        formContainer.innerHTML = '';
        console.log(category);
      
        // Show appropriate form based on category
        switch(category) {
          case "Plat":
            formContainer.innerHTML = `
            <form>
                <div class="right1">
                <div class="iteme">
                    <h1 class="titrei">Plat Cordon Bleu</h1>
                    <h3><span class="prix">850 da</span></h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Steak a la sauce chompignon</h1>
                    <h3><span class="prix">1100 da</span> </h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Mexicain Boeuf</h1>
                    <h3><span class="prix">1100 da</span> </h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Entrecote de Boeuf Grillee</h1>
                    <h3><span class="prix">1200 da</span> </h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Mixte</h1>
                    <h3><span class="prix">1200 da</span></h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Cote D'agneau</h1>
                    <h3><span class="prix">1300 da</span></h3>
                </div><br>
                
            </div>
            <div class="vl2"></div>
            <div class="left1" style="width: 50%;">
                <div class="iteme">
                    <h1 class="titrei">Plat Escalope Grillee</h1>
                    <h3><span class="prix">650 da</span></h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat brochettte Poulet</h1>
                    <h3><span class="prix">700 da</span></h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Hachee de Boeuf</h1>
                    <h3><span class="prix">700 da</span></h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Escalope Panee</h1>
                    <h3><span class="prix">700 da</span></h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Mergeuz</h1>
                    <h3><span class="prix">700 da</span></h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Poulet a la mexicaine</h1>
                    <h3><span class="prix">600 da</span> </h3>
                </div><br>
                <div class="iteme">
                    <h1 class="titrei">Plat Poulet Crispé</h1>
                    <h3><span class="prix">750 da</span> </h3>
                </div><br>
                
                
            </div>
            <img class="younes" src="/images/pl.png" alt="">
              </form>
            `;
            
            break;
            default:
            formContainer.style.display = "none";
          }
          if(category !== "none") {
            formContainer.style.display = "block";
          } else {
            formContainer.style.display = "none";
          }
        }


        function showContent3() {
          var category = document.getElementById("btn3").value;
          var formContainer = document.getElementById("form-container");
        
          // Reset form container
          formContainer.innerHTML = '';
          console.log(category);
        
          // Show appropriate form based on category
          switch(category) {
            case "Entree":
              formContainer.innerHTML = `
              <form>
                  <div class="right1">
                  <h2 class="titreir">Entree Froide</h2>
                  <div class="iteme">
                      <h1 class="titrei">Salade Cesar</h1>
                      <h3><span class="prix">300 da</span></h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Salade au Thon</h1>
                      <h3><span class="prix">350 da</span> </h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Salade Variee</h1>
                      <h3><span class="prix">400 da</span> </h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Assiette au Fromage</h1>
                      <h3><span class="prix">550 da</span> </h3>
                  </div><br>
                  
              </div>
                  <div class="vl3"></div>
                  <div class="left1" style="width: 50%;">
                  <h2 class="titreil">Entree Chaude</h2>
                      <div class="iteme">
                          <h1 class="titrei">Soupe</h1>
                          <h3><span class="prix">150 da</span></h3>
                      </div><br>
                      <div class="iteme">
                          <h1 class="titrei">Omllette au Fromage</h1>
                          <h3><span class="prix">250 da</span></h3>
                      </div><br>
                      <div class="iteme">
                          <h1 class="titrei">Omllette au Thon</h1>
                          <h3><span class="prix">250 da</span></h3>
                      </div><br>
                      
                      
                  </div>
                  <img class="younes" src="/images/sal.png" alt="">
                </form>
              `;
              
              break;
              default:
              formContainer.style.display = "none";
            }
            if(category !== "none") {
              formContainer.style.display = "block";
            } else {
              formContainer.style.display = "none";
            }
          }

       
           

          function showContent4() {
            var category = document.getElementById("btn4").value;
            var formContainer = document.getElementById("form-container");
          
            // Reset form container
            formContainer.innerHTML = '';
            console.log(category);
          
            // Show appropriate form based on category
            switch(category) {
              case "Tacos":
                formContainer.innerHTML = `
                <form>
                    <div class="center">
                        <div class="iteme">
                        <h1 class="titrei">Tacos Simple</h1>
                        <h3><span class="prix">550 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Tacos Double Mixte</h1>
                            <h3><span class="prix">650 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Tacos Trois fromage</h1>
                            <h3><span class="prix">800 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Tacos Maxi</h1>
                            <h3><span class="prix">950 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Tacos Cordon Bleu</h1>
                            <h3><span class="prix">650 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Tacos Suisse</h1>
                            <h3><span class="prix">750 da</span></h3>
                        </div><br>
                    </div>
                
                    
                    <img class="younes" src="/images/tac.png" alt="">
                  </form>
                `;
                
                break;
                default:
                formContainer.style.display = "none";
              }
              if(category !== "none") {
                formContainer.style.display = "block";
              } else {
                formContainer.style.display = "none";
              }
            }


            function showContent5() {
              var category = document.getElementById("btn5").value;
              var formContainer = document.getElementById("form-container");
            
              // Reset form container
              formContainer.innerHTML = '';
              console.log(category);
            
              // Show appropriate form based on category
              switch(category) {
                case "Burgers":
                  formContainer.innerHTML = `
                  <form>
                  <div class="center">
                  <div class="iteme">
                  <h1 class="titrei">Chicken Burger </h1>
                  <h3><span class="prix">300 da</span></h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Cheese Burger</h1>
                      <h3><span class="prix">300 da</span></h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">EGG Burger</h1>
                      <h3><span class="prix">350 da</span></h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Forest Burger</h1>
                      <h3><span class="prix">400 da</span></h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Jambon Burger</h1>
                      <h3><span class="prix">400 da</span></h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Big Burger</h1>
                      <h3><span class="prix">450 da</span></h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Max Burger</h1>
                      <h3><span class="prix">550 da</span></h3>
                  </div><br>
                  <div class="iteme">
                      <h1 class="titrei">Super Big Burger</h1>
                      <h3><span class="prix">600 da</span></h3>
                  </div><br>
              </div>
                  
                      
              <img class="younes" src="/images/fond.png" alt="">
                    </form>
                  `;
                  
                  break;
                  default:
                  formContainer.style.display = "none";
                }
                if(category !== "none") {
                  formContainer.style.display = "block";
                } else {
                  formContainer.style.display = "none";
                }
              }

              function showContent6() {
                var category = document.getElementById("btn6").value;
                var formContainer = document.getElementById("form-container");
              
                // Reset form container
                formContainer.innerHTML = '';
                console.log(category);
              
                // Show appropriate form based on category
                switch(category) {
                  case "Poutines":
                    formContainer.innerHTML = `
                    <form>
                      <div class="center">
                        <div class="iteme">
                            <h1 class="titrei">Poutines Le Classic</h1>
                            <h3><span class="prix">600 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Poutines Le Panne</h1>
                            <h3><span class="prix">700 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Poutines American</h1>
                            <h3><span class="prix">750 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Poutines Le Classic V.H</h1>
                            <h3><span class="prix">800 da</span></h3>
                        </div><br>
                        <div class="iteme">
                            <h1 class="titrei">Poutines Ham-Ham</h1>
                            <h3><span class="prix">950 da</span></h3>
                        </div><br>
                      </div>
                      <img class="younes" src="/images/pou.png" alt="">
                    </form>`;
                    
                    break;
                    default:
                    formContainer.style.display = "none";
                  }
                  if(category !== "none") {
                    formContainer.style.display = "block";
                  } else {
                    formContainer.style.display = "none";
                  }
                }

                


                  document.addEventListener("scroll", () => {
                    const header = document.querySelector('header');
                    if (window.scrollY > 0) {
                      header.classList.add('scrolled');
                    } else {
                      header.classList.remove('scrolled');
                    }
                  })
                
                  document.addEventListener("scroll", () => {
                  const header = document.querySelector('header');
                  const logo = document.getElementById('logo');
                  if (window.scrollY > 0) {
                    header.classList.add('scrolled');
                    logo.src = '/images/odelice.png'; 
                  } else {
                    header.classList.remove('scrolled');
                    logo.src = '/images/odelicen.png'; 
                  }
                });