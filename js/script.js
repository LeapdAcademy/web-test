
$(document).ready(function(){
    $('.cycle-three').animate({'opacity':'1'},{duration:2000,complete: function(){
        $('.cycle-three').animate({'left':'0'},{duration:1000,complete:function(){
            $('.cycle-two').animate({'opacity':'1'},{duration:1500,complete: function(){
                $('.cycle-two').animate({'top':'0'},{duration:1000,complete: function(){
                    $('.cycle-one').animate({'opacity':'1'},{duration:1000,complete: function(){
                        $('.cycle-one').animate({'top':'0'},{duration:1000,complete: function(){
                            $('.logo-item img:nth-last-of-type(2)').animate({'opacity':'1'},{duration:1500,complete: function(){
                                $('.logo-item img:nth-last-of-type(2)').animate({'top':'0'},{duration:1000,complete: function(){
                                    $('.logo-item img:nth-last-of-type(1)').animate({'opacity':'1'},{duration:1000,complete: function(){
                                        $('.logo-item img:nth-last-of-type(1)').animate({'top':'0'},{duration:1000,complete: function(){
                                            $('.logo-text').animate({'opacity':'1'},{duration:1500,complete: function(){
                                                $('.logo-text h1').animate({'opacity':'1'},{duration:1500,complete: function(){
                                                    $('.logo-text p').animate({'opacity':'1'},{duration:1500,complete: function(){
                                                        $('.header-nav').animate({'opacity':'1'},{duration:1500,complete: function(){
                                                            $('#none').css('display','block');
                                                        }})
                                                    }})
                                                }})
                                            }})
                                        }})
                                    }})
                                }})
                            }})
                        }})
                    }})
                }})
            }})
        }})
    }})

    $(function(){
        $('a[href^="#"]').click(function() {
        var speed = 500; // スクロール速度(ミリ秒)
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top -60;
        $('.menu').removeClass("in-menu");
        $('html').animate({scrollTop:position}, speed, 'swing');
        return false;
        });
        });

        // function onePageNave(switchName){
        //     const navSwitch = $(switchName);
        //     const deductHeight = 60;//ここに設定した数字を引いた位置にスクロールした時点で切り替わる
        //     let navArr = [];
        // }

        // ナビゲーションに設定したクラスのリンク先idを取得して、それぞれのid名とtop offsetの値を配列に追加します
    // navSwitch.each(function(i){
    //   let navSwitchHref = $(this).attr('href');
    //   let tgtOff = $(navSwitchHref).offset().top - deductHeight;
    //   navArr.push([]);
    //   navArr[i].switch = $(this);
    //   navArr[i].tgtOff = tgtOff;
    // });
 

    $(window).scroll(function(){
        // for(let i =0; i < navArr.length; i++){
        //     let scroll = $(window).scrollTop();
        //     let tgtKey = navArr[i];
        //     let tgtSwitch = tgtKey.switch;
        //     let tgtOff = tgtKey.tgtOff;

        //     if(scroll > tgtOff){

        //     }
        // }
        if(this.scrollY > 20)
        {
            $('.header-nav').css('top','');
            $('.header-nav').addClass("nav-bg");
            $('.logo-img').addClass("active-img");
        }else
        {
            $('.header-nav').css('top','10%');
            $('.header-nav').removeClass("nav-bg");
            $('.logo-img').removeClass("active-img")
        }
    })

    $('.menu-btn').click(function(){
        $('.menu').toggleClass("in-menu");
        $('.header-titel').toggleClass(".close")
        $('.menu-btn i').toggleClass("active");
    })

    
  



})




// const targeltitem = document.querySelectorAll('.concept-faide');



// $(document).ready(function(){

//     $(window).scroll(function(){
//         if(this.scrollY >20){
//             $('.hader-nav').addClass("sticky")
//         }else{
//             $('.hader-nav').removeClass("sticky")
//         }

//         for(let i = 0; i < targeltitem.length; i++){
//             const getElementDistancel = targeltitem[i].getBoundingClientRect().top
//             console.log(getElementDistancel);
          
//             if(window.innerHeight > getElementDistancel){
//                 targeltitem[i].classList.add('fadein-after')
//             }
//             else{
//                 targeltitem[i].classList.remove('fadein-after')
//             }
//         }

//         // if(this.scrollY >500){
//         //     $('.vision-img').addClass("fadein-after")
//         // }
//         // else{
//         //     $('.vision-img').removeClass("fadein-after")
//         // }


//     })

//     $('.humbargar').click(function(){
//         $('.hader-nav ul').toggleClass("active");
//         $('.humbargar i').toggleClass("active2");
//     })
// })

