$(document).ready(function(){
    // ###### GNB ######
    // nav li를 클릭했을 때,
    $('nav li').click(function(){
        // 1. 순번찾기
        let i = $(this).index()
        // 2. 클릭한 순번에 맞춰서 article 에게 class 값 주기
        $('section>article').removeClass('on')
        $('section>article').eq(i).addClass('on')
        // 3. black article 위로 올라감
        $('section article.black').css({'top':'0'}).stop().animate({'top':'-101%'},1000)
        // 4. gnb_ring 이미지 이동
        if (i == 0) {
            $('header nav>img').stop().animate({'left':'74px'},500)
        } else if (i == 1) {
            $('header nav>img').stop().animate({'left':'224px'},500)
        } else if (i == 2) {
            $('header nav>img').stop().animate({'left':'376px'},500)
        } else if (i == 3) {
            $('header nav>img').stop().animate({'left':'524px'},500)
        } else if (i == 4) {
            $('header nav>img').stop().animate({'left':'678px'},500)
        }
    })
    
    // ###### Home ######
    //  자동슬라이드 설정
    let homeIndex = 0;
    let autoSlideInterval;
    let isAnimating = false;
    let autoSlideTimeout;
    const totalSlides = $('.home_slide_inner li').length;

    function startAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        if (autoSlideTimeout) {
            clearTimeout(autoSlideTimeout);
        }

        autoSlideInterval = setInterval(function(){
            showSlide((homeIndex + 1) % totalSlides);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
        clearTimeout(autoSlideTimeout);
    }

    function showSlide(index) {
        if (isAnimating || index === homeIndex) return;

        isAnimating = true;
        $('.home_slide_inner li').stop(true, true);

        let currentSlide = $('.home_slide_inner li').eq(homeIndex);
        let nextSlide = $('.home_slide_inner li').eq(index);

        currentSlide.css({'opacity': 1, 'z-index': 1}).animate({'opacity': 0}, 800, function() {
            $(this).css('z-index', 0);
        });
        nextSlide.css({'opacity': 0, 'z-index': 2}).animate({'opacity': 1}, 800, function() {
            isAnimating = false;
        });

        homeIndex = index;
        updateButtonState();
    }

    function updateButtonState() {
        $('.home .btn_center span').removeClass('on');
        $('.home .btn_center span').eq(homeIndex).addClass('on');
    }

    // 초기 슬라이드 설정
    $('.home_slide_inner li').css({'opacity': 0, 'position': 'absolute', 'top': 0, 'left': 0});
    $('.home_slide_inner li').eq(homeIndex).css('opacity', 1);

    startAutoSlide();

    $('.home .btn_center span').click(function(){
        if (isAnimating) return;

        let btnCenterIndex = $(this).index();
        
        stopAutoSlide();
        showSlide(btnCenterIndex);

        autoSlideTimeout = setTimeout(startAutoSlide, 5000);
    });

    // 좌우 버튼 클릭 이벤트
    $('.btn_left').click(function() {
        if (isAnimating) return;
        
        stopAutoSlide();
        let prevIndex = (homeIndex - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);

        autoSlideTimeout = setTimeout(startAutoSlide, 5000);
    });

    $('.btn_right').click(function() {
        if (isAnimating) return;
        
        stopAutoSlide();
        let nextIndex = (homeIndex + 1) % totalSlides;
        showSlide(nextIndex);

        autoSlideTimeout = setTimeout(startAutoSlide, 5000);
    });
    // 우측하단 Profile 가기 버튼 설정
    $('.go_profile').click(function(){
        $('section>article').removeClass('on')
        $('section>article').eq(1).addClass('on')
        $('.profile_scroll').hide();
        $('.profile_main').show();

        $('section article.black').css({'top':'0'}).stop().animate({'top':'-101%'},1000)

        $('header nav>img').stop().animate({'left':'224px'},500)
    })
    
    // ###### Profile ######
    // profile_main 에서 li 를 클릭하면 profile_scroll 로 이동하는 듯한 효과
    $('.profile_main li').click(function(){
        $('.profile_main').hide()
        $('.profile_scroll').show()
        // body 의 height 값 20000px 로 늘리기
        $('body').addClass('on')
    })
        // GNB 클릭시 body 높이값 변화 설정
    $('nav li').click(function(){
        $('body').removeClass('on')
    })
    $('nav li').eq(1).click(function(){
        $('.profile_scroll').hide()
        $('.profile_main').show()
    })
    // profile_scroll 설정
    // 스크롤했을 때, 스크롤 값 찾기, Z축 이동 설정
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        
        $('.profile_scroll>div').eq(0).css({'transform':'translateZ('+(0+sc)+'px)'})
        $('.profile_scroll>div').eq(1).css({'transform':'translateZ('+(-5000+sc)+'px)'})
        $('.profile_scroll>div').eq(2).css({'transform':'translateZ('+(-10000+sc)+'px)'})
        $('.profile_scroll>div').eq(3).css({'transform':'translateZ('+(-15000+sc)+'px)'})
        $('.profile_scroll>div').eq(4).css({'transform':'translateZ('+(-20000+sc)+'px)'})
    })
    // profile_main li를 클릭했을 때
    // 클릭한 순번에 맞춰서 profile_scroll>div 에게 class 값 주기
    $('.profile_main li').click(function(){
        let i = $(this).index()

        $('.profile_scroll>div').removeClass('on')
        $('.profile_scroll>div').eq(i).addClass('on')

        $('html, body').stop().animate({'scrollTop':i*5000},1200)
    })
    // btn_back 과 btn_next 설정
    // btn_back 을 누르면 현재 보고 있는 페이지의 앞페이지로 넘어가고
    // btn_next 를 누르면 현재 보고 있는 페이지의 뒷페이지로 넘어간다.
    
    // ###### Music ######
    // GNB의 Music 을 클릭하면 .music_detail과 .music_player 은 숨기고 .music_inner 는 나타나라
    $('nav li').eq(2).click(function(){
        $('.music_detail').hide()
        $('.music_player').hide()
        $('.music_inner').show()
        // .music_player .play img 에 on 클래스가 있다면 제거
        $('.music_player .play img').removeClass('on')
        // .music_player .cd 에 on 클래스가 있다면 제거
        $('.music_player .cd').removeClass('on')
        // .music_player .cd 의 속성값 src 가 music_player_cd.png 로 초기화
        $('.music_player .cd').attr('src','img/music_player_cd.png')
    })
    // music_cd 안에 마우스가 들어가면 music_inner>p가 사라져라
    $('.music_cd').mouseenter(function(){
        $('.music_inner>p').hide()
    })
    // music_cd 에서 마우스가 나오면 music_inner>p가 나타나라
    $('.music_cd').mouseleave(function(){
        $('.music_inner>p').show()
    })

    // music_cd 의 가로 스크롤 설정
    // GNB의 Music 을 클릭하면 body 값이 커져서 옆에 스크롤이 생긴다.
    $('nav li').eq(2).click(function(){
        $('body').addClass('cd')
    })
        // 나머지 메뉴들은 초기화
    $('nav li').eq(0).click(function(){
        $('body').removeClass('cd')
    })
    $('nav li').eq(1).click(function(){
        $('body').removeClass('cd')
    })
    $('nav li').eq(3).click(function(){
        $('body').removeClass('cd')
    })
    $('nav li').eq(4).click(function(){
        $('body').removeClass('cd')
    })
    // music_cd 안에 들어갔을 때, 스크롤탑값과 ul의 left값을 연동시키기
    $('.music_cd').mouseenter(function(){
        $('.music_cd ul').css({'left':-500})
         $(window).scroll(function(){
            let scCd = $(this).scrollTop()
            $('.music_cd ul').css({'left':-500-scCd})
        })
    })
    // music_cd 밖에 나갔을 때, 연동 끊기
    $('.music_cd').mouseleave(function(){
        $('.music_cd ul').css({'left':0})
        $(window).scroll(function(){
            let scCd2 = $(this).scrollTop()
            $('.music_cd ul').css({'left':0*scCd2})
        })
    })
    // music_cd 의 li를 클릭했을 때, music_detail과 .music_player 나타나기
    $('.music_cd li').click(function(){
        $('.music_inner').hide()
        $('.music_detail').fadeIn()
        $('.music_player').fadeIn()
        
        // body 의 cd 클래스 지워서 스크롤 없애기
        $('body').removeClass('cd')
    })
    // music_player 의 .play 의 img 를 클릭했을 때, on 클래스 추가해서 정지 이미지로 top 값 변경
    $('.music_player .play img').click(function(){
        $(this).toggleClass('on')
        
        // music_player 의 cd 의 속성값 src 가 music-cd6.png 로 변경
        if ($(this).hasClass('on')) {
            $('.music_player .cd').attr('src','img/music-cd6.png')
            // 빙글빙글 도는 애니메이션 추가
            $('.music_player .cd').addClass('on')
        } else {
            $('.music_player .cd').attr('src','img/music-cd6.png')
            // 빙글빙글 도는 애니메이션 제거
            $('.music_player .cd').removeClass('on')
        }
        
    })

   




    // ###### Gallery ######
    // nav 의 gallery 를 클릭할 때, 회전이미지들 등장
    function galleryOn(selector) {
        let element = $(selector);
        element.addClass('on');
        
        setTimeout(function() {
            element.removeClass('on');
        }, 1500);  
    }
    $('nav li').eq(3).click(function() {
        galleryOn('.gallery .imgBox div');

        // 배경 이미지 등장
        function galleryBgOn(selector) {
            let element2 = $(selector);
            element2.addClass('on');
            
            setTimeout(function() {
                element2.removeClass('on');
            }, 2000);  
        }
        galleryBgOn('.gallery .bgBox img');
    });
    // supernatural 이미지 호버시 큰 이미지 등장
    $('.gallery .supernatural .imgBox div').click(function(){
        let hoverImg = $(this).index()
        $('.gallery .hoverBox').addClass('on')
        if (hoverImg == 0) {
            $('.gallery .hoverBox img').attr('src','img/gallery_supernatural_1.jpg')
        } else if (hoverImg == 1) {
            $('.gallery .hoverBox img').attr('src','img/gallery_supernatural_2.jpg')
        } else if (hoverImg == 2) {
            $('.gallery .hoverBox img').attr('src','img/gallery_supernatural_3.jpg')
        } else if (hoverImg == 3) {
            $('.gallery .hoverBox img').attr('src','img/gallery_supernatural_4.jpg')
        } else if (hoverImg == 4) {
            $('.gallery .hoverBox img').attr('src','img/gallery_supernatural_5.jpg')
        } else if (hoverImg == 5) {
            $('.gallery .hoverBox img').attr('src','img/gallery_supernatural_6.jpg')
        } else if (hoverImg == 6) {
            $('.gallery .hoverBox img').attr('src','img/gallery_supernatural_7.jpg')
        }
    })
    // hoverBox 클릭시 hoverBox 의 on 클래스 제거
    $('.gallery .hoverBox').click(function(){
        $(this).removeClass('on')
    })
    // rightnow 이미지 호버시 큰 이미지 등장
    $('.gallery .rightnow .imgBox div').click(function(){
        let hoverImg = $(this).index()
        $('.gallery .hoverBox').addClass('on')
        if (hoverImg == 0) {
            $('.gallery .hoverBox img').attr('src','img/gallery_rightnow_1.jpg')
        } else if (hoverImg == 1) {
            $('.gallery .hoverBox img').attr('src','img/gallery_rightnow_2.jpg')
        } else if (hoverImg == 2) {
            $('.gallery .hoverBox img').attr('src','img/gallery_rightnow_3.jpg')
        } else if (hoverImg == 3) {
            $('.gallery .hoverBox img').attr('src','img/gallery_rightnow_4.jpg')
        } else if (hoverImg == 4) {
            $('.gallery .hoverBox img').attr('src','img/gallery_rightnow_5.jpg')
        } else if (hoverImg == 5) {
            $('.gallery .hoverBox img').attr('src','img/gallery_rightnow_6.jpg')
        } 
    })
    // hoverBox 클릭시 hoverBox 의 on 클래스 제거
    $('.gallery .hoverBox').click(function(){
        $(this).removeClass('on')
    })
    
    
    

    // Video 설정
    // .video 의 .txtBox 의 li 를 클릭할 때, .tvBox 의 source 의 src 속성 주소가 바뀌어라
    $('.video .txtBox li').click(function(){
        let videoIndex = $(this).index();
        let videoPlayer = $('.video .tvBox video')[0];
        if (videoIndex == 0) {
            $('.video .tvBox source').attr('src','vid/rightnow.mp4')
        } else if (videoIndex == 1) {
            $('.video .tvBox source').attr('src','vid/supernatural.mp4')
        } else if (videoIndex == 2) {
            $('.video .tvBox source').attr('src','vid/bubblegum.mp4')
        } else if (videoIndex == 3) {
            $('.video .tvBox source').attr('src','vid/howsweet.mp4')
        } else if (videoIndex == 4) {
            $('.video .tvBox source').attr('src','vid/newjeans.mp4')
        }
        // 변경된 소스로 비디오를 다시 로드
        videoPlayer.load();
    })
    // gnb 의 video 클릭할때마다 .video .tvBox source 의 src가 vid/video_glitch.mp4 가 되어라
    $('nav li').eq(4).click(function(){
        $('.video .tvBox source').attr('src','vid/video_glitch.mp4')
        let videoPlayer2 = $('.video .tvBox video')[0];
        videoPlayer2.load();
    })

    // matrix 배경 오픈소스 첨부
    const canvas = document.getElementById('Matrix');
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const katakana = 'NEWJEANS'
    // const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // const latin = 'NEWJEANS'
    // const nums = '0123456789';
    
    // const alphabet = katakana + latin + nums;
    const alphabet = katakana;
    
    const fontSize = 18;
    const columns = canvas.width/fontSize;
    
    const rainDrops = [];
    
    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        context.fillStyle = '#1B955B';
        context.font = fontSize + 'px "Press Start 2P"';
    
        for(let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
    
            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    
    setInterval(draw, 80);















})