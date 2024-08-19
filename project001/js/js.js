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
        // console.log(sc)
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

    // datepicker
    $( function() {
        $( "#datepicker" ).datepicker({
            onSelect: function(dateText, inst) {
                // alert('선택한 날짜: '+dateText);
            }
        });
    } );

    // 자원봉사 예약 버튼$('.volunteer h3 a')을 클릭시 예약팝업 등장  
    // 포트폴리오 목적상 후원, 입양클릭시에도 보여주기위해 금액/물품 후원 버튼, 입양 문의 버튼에도 적용
    $('.section2 .listBox > div h3 a').click(function(e){
        e.preventDefault();
        $('.reservation').fadeIn();
    })
    // 예약팝업 닫기 설정
    $('.reservation>span').click(function(){
        $('.reservation').fadeOut();
    })

    // 예약팝업에서 예약하기 클릭시 예약확인 나타나기
    // 변수만들기
    // 버튼을 클릭했을시 변수로 지정한 내용을 저장하기
    $('.reservation_form').find('button').click(function (e) {
        e.preventDefault();
        // 예약자 찾아오기
        let name = $('#name').val();
        // 예약날짜 찾아오기
        let selectDate = $('#datepicker').datepicker('getDate');
        let selectMon = selectDate.getMonth() + 1; // 달은 0부터 시작
        let selectDay = selectDate.getDate();
        // 예약인원 찾아오기
        let people = $('#people').val();
        // 예약자 이메일 찾아오기
        let email = $('#email').val();
        // 예약자 연락처 찾아오기
        let phone = $('#phone').val();
        // 예약 팝업창 퇴장
        $('.reservation').fadeOut();
        // 예약확인 팝업창 등장
        $('.reservation_confirm').css({'display':'flex'});

        // 예약확인 팝업창에 텍스트로 쓰기
        $('.reservation_confirm').find('.user li').eq(0).text(name);
        $('.reservation_confirm').find('.user li').eq(1).text(selectMon + '월' + selectDay + '일');
        $('.reservation_confirm').find('.user li').eq(2).text(people + '명');
        $('.reservation_confirm').find('.user li').eq(3).text(phone);
        $('.reservation_confirm').find('.user li').eq(4).text(email);
    })

    // 예약확인팝업 확인 - 닫힘 설정
    $('.reservation_confirm>div').click(function(){
        $('.reservation_confirm').fadeOut();

        // 예약팝업창 값들 초기화
        $('.reservation_form').find('#name').val("");
        $('.reservation_form').find('#phone').val("");
        $('.reservation_form').find('#email').val("");
        $('.reservation_form').find('#people').val("1");
    })
    // 예약확인팝업 X - 닫힘 설정
    $('.reservation_confirm>span').click(function(){
        $('.reservation_confirm').fadeOut();

        // 예약팝업창 값들 초기화
        $('.reservation_form').find('#name').val("");
        $('.reservation_form').find('#phone').val("");
        $('.reservation_form').find('#email').val("");
        $('.reservation_form').find('#people').val("1");
    })

    // util 클릭, hover시 헤더 접히고 피는 설정
    $('header .util li').eq(1).click(function(e){
        e.preventDefault();
        // header 의 height 변수 설정
        let headerH = $('header').height();
        // window 의 가로값 변수 설정
        let windowW = $(window).width();
        if (headerH == 80) { // header 의 높이가 80px 일땐, 높이를 늘리고
            if (windowW <= 599) { // 모바일 상황
                $('header').height('990px');
            } else if (windowW >= 600 && windowW <= 768) { // 태블릿 상황
                $('header').height('360px');
            }
        } else { // 그게 아니라면 높이를 80px 로 해라
            $('header').height('80px');
        }
    })
    $('header').mouseenter(function(){
        // header 의 height 변수 설정
        let headerH = $('header').height();
        // window 의 가로값 변수 설정
        let windowW = $(window).width();
        if (windowW <= 599) { // 모바일 상황
            $('header').height('990px');
        } else if (windowW >= 600 && windowW <= 768) { // 태블릿 상황
            $(this).height('360px');
        } else { // 데스크탑 상황
            $(this).height('340px');
        }
    })
    $('header').mouseleave(function(){
        $(this).height('80px');
    })





})