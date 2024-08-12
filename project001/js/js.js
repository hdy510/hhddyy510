// 제이쿼리선언문
$(document).ready(function(){
    // 스크롤 할 때,
    $(window).scroll(function() {
        // top 버튼 설정
        // 화면 상단에서 top 버튼 사라짐
        if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
        $('.topBtn').fadeIn();
        } else {
        $('.topBtn').fadeOut();
        }
        }); 
    // top 버튼 클릭시 화면 상단으로 이동
    $(".topBtn").click(function() { 
        $('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
        }, 400); // 속도 400 
        return false; 
    });

    // 스크롤시 등장 애니메이션
    // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
    const $counters = $(".scroll_on");
    
    // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function() {
        // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
        $counters.each(function() {
            const $el = $(this);
    
            // 요소의 위치 정보를 가져옵니다.
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
            const contentHeight = rect.bottom - rect.top; // 요소의 높이
            
            // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $el.addClass('active');
            }
            // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();

    // .remote_control 설정
    // .remote_control 의 li 를 클릭할 때, 순번을 찾아라
    $('.remote_control li').click(function(){
        let remoteI = $(this).index();
        // 스크롤이 section의 상단으로 이동해라
        let sectionTop = $('section').eq(remoteI).offset().top;
        $('html, body').animate({scrollTop:sectionTop}, 1000);
    })
    // 브라우저의 상단이 section2의 상단의 상하 100px 이내에 있다면,
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        console.log(sc)
        let sec1Top = $('section').eq(0).offset().top;
        let sec2Top = $('section').eq(1).offset().top;
        let sec3Top = $('section').eq(2).offset().top;
        let sec4Top = $('section').eq(3).offset().top;
        let sec5Top = $('section').eq(4).offset().top;
        let sec6Top = $('section').eq(5).offset().top;
        if (sc < sec1Top + 400 ) {
            $('.remote_control li').removeClass('on');
            $('.remote_control li').eq(0).addClass('on');
            $('.remote_control li').find('img').removeClass('on');
            $('.remote_control li').eq(0).find('img').addClass('on');
        } else if (sc > sec2Top - 400 && sc < sec3Top - 400){
            $('.remote_control li').removeClass('on');
            $('.remote_control li').eq(1).addClass('on');
            $('.remote_control li').find('img').removeClass('on');
            $('.remote_control li').eq(1).find('img').addClass('on');
        } else if (sc > sec3Top - 400 && sc < sec4Top - 400) {
            $('.remote_control li').removeClass('on');
            $('.remote_control li').eq(2).addClass('on');
            $('.remote_control li').find('img').removeClass('on');
            $('.remote_control li').eq(2).find('img').addClass('on');
        } else if (sc > sec4Top - 400 && sc < sec5Top - 400) {
            $('.remote_control li').removeClass('on');
            $('.remote_control li').eq(3).addClass('on');
            $('.remote_control li').find('img').removeClass('on');
            $('.remote_control li').eq(3).find('img').addClass('on');
        } else if (sc > sec5Top - 400 && sc < sec6Top - 400) {
            $('.remote_control li').removeClass('on');
            $('.remote_control li').eq(4).addClass('on');
            $('.remote_control li').find('img').removeClass('on');
            $('.remote_control li').eq(4).find('img').addClass('on');
        } else if (sc > sec6Top - 400) {
            $('.remote_control li').removeClass('on');
            $('.remote_control li').eq(5).addClass('on');
            $('.remote_control li').find('img').removeClass('on');
            $('.remote_control li').eq(5).find('img').addClass('on');
        }
    });
    
    // section1 의 후원 / 입양 / 자원봉사 문의 버튼 클릭시 section2 로 이동
    $('.section1 .qna').click(function(){
        let sectionTop = $('section').eq(1).offset().top;
        $('html, body').animate({scrollTop:sectionTop}, 1000);
    })















})