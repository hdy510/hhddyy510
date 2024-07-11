$(document).ready(function () {
    // GNB 장바구니 아이콘 클릭시, on 클래스 없다면, 장바구니 팝업창 열림
    $('.util ul li').eq(2).click(function(e){
        e.preventDefault()
        // on 클래스가 있다면, 장바구니 팝업창 닫힘
        if ($('.util ul li').eq(2).hasClass('on')) {
            $('.popup_bag2').hide()
            // on 클래스 제거
            $('.util ul li').eq(2).removeClass('on')
            } else {
            $('.popup_bag2').show()
            // on 클래스 추가
            $(this).addClass('on')
            }
    })
    
    //  GNB 유저 아이콘 클릭시, loginPage 페이지 등장
    $('.util ul li').eq(3).click(function(e){
        e.preventDefault()
        $('.main').hide()
        $('.sub').hide()
        $('footer').hide()
        $('.loginPage').css({'display':'flex'})
    })
    
    // main_section1 TypeIt 효과
    new TypeIt('#typeWriter', {
        deleteSpeed: 80,
        loop: true,
    })
        .pause(2000)
        .delete(20)
        .go();

    // .belowBtn 클릭시, main_section2 의 위치로 브라우저 화면 이동
    $('.belowBtn').click(function () {
        $('html, body').animate(
            {
                scrollTop: $('.main_section2').offset().top,
            },
            1000
        );
    });

    // Top 버튼 클릭시, 화면 상단으로 이동
    $('.top_btn').click(function(){
        $('html, body').animate({scrollTop:0},400);
    });

    // 스크롤 이벤트 발생시
    $(window).scroll(function () {
        // Top 버튼 등장/퇴장
        if ($(this).scrollTop() > 300){
            $('.top_btn').fadeIn();
        } else{
            $('.top_btn').fadeOut();
        }

        // 스크롤 등장 애니메이션
        // redShape 등장
        $('.redShapeOuter').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('visible');
            }
        });
        $('.redShapeInner').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('visible');
            }
        });
        //  main_section2 타이틀 등장
        $('.main_section2 .titleBox img').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('visible');
            }
        });
        $('.main_section2 .titleBox p').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
        //  main_section2 bear 등장
        $('.main_section2 .bear').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.9) {
                $(this).addClass('visible');
            }

            $('.bear .jellyGreen').addClass('visible');
            $('.bear .jellyOrange').addClass('visible');
            $('.bear .jellyRed').addClass('visible');
            $('.bear .jellyWhite').addClass('visible');
            $('.bear .jellyYellow').addClass('visible');
        });
        //  main_section2 listBox 등장
        $('.main_section2 .listBox').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
        //  main_section3 topBox 등장
        $('.main_section3 .topBox').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
        //  main_section3 middleBox 등장
        $('.main_section3 .middleBox').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
        //  main_section3 bottomBox 등장
        $('.main_section3 .bottomBox').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
        //  main_section4 intro 등장
        $('.main_section4 .intro').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
        //  main_section4 historyMain 과 historySub 등장
        $('.main_section4 .historyMain').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
                $('.main_section4 .historySub').addClass('visible');
                $('.main_section4 .historySub ul').addClass('visible');
            }
        });
        //  main_section6 topImage 등장
        $('.main_section6 .topImage').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.8) {
                $(this).addClass('visible');
            }
        });
        //  main_section6 txtBox h2 등장
        $('.main_section6 .txtBox h2').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
        //  main_section6 txtBox p 등장
        $('.main_section6 .txtBox p').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
        //  main_section6 listBox 등장
        $('.main_section6 .listBox').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $(this).addClass('visible');
            }
        });
    });

    // 제품 이미지 클릭시, 서브페이지로 이동하는 것 같은 효과
    // 1. main_section2 의 제품들
    $('.main_section2 .listBox ul li a').click(function(e){
        e.preventDefault()
        // 메인페이지 안보이고, 서브페이지 보이게
        $('.main').hide()
        $('.sub').show()
        // 화면 상단으로 스크롤 이동
        $('html, body').animate({scrollTop:0},0);
    })
    // 2. main_section3 의 제품
    $('.main_section3 .bottomBox a').click(function(e){
        e.preventDefault()
        // 메인페이지 안보이고, 서브페이지 보이게
        $('.main').hide()
        $('.sub').show()
        // 화면 상단으로 스크롤 이동
        $('html, body').animate({scrollTop:0},0);
    })
    // 3. main_section6 의 제품
    $('.main_section6 .reviewHide a').click(function(e){
        e.preventDefault()
        // 메인페이지 안보이고, 서브페이지 보이게
        $('.main').hide()
        $('.sub').show()
        // 화면 상단으로 스크롤 이동
        $('html, body').animate({scrollTop:0},0);
    })
    // 4. sub_section1 의 이런상품어때요? 제품
    $('.sub_section2 .listBox_wrap ul li a').click(function(e){
        e.preventDefault()
        // 메인페이지 안보이고, 서브페이지 보이게
        $('.main').hide()
        $('.sub').show()
        // 화면 상단으로 스크롤 이동
        $('html, body').animate({scrollTop:0},0);
    })

    // 관심상품 좋아요 버튼 토글 설정
    $('.like_bag_btn .like i').click(function () {
        // 버튼클릭: 만약 i 가 fa-regular 클래스를 갖고 있다면, fa-regular 클래스를 지우고, fa-solid 클래스와 on 클래스를 추가해라
        // 취소: 만약 그렇지 않으면, fa-solid 클래스와 on 클래스를 지우고, fa-regular 클래스를 추가해라

        if ($(this).hasClass('fa-regular')) {
            $(this).removeClass('fa-regular');
            $(this).addClass('fa-solid');
            $(this).addClass('on');
            // 관심상품 팝업알림창(popup_like) 등장
            $('.popup_like').css({ display: 'block' });
        } else {
            $(this).removeClass('fa-solid');
            $(this).removeClass('on');
            $(this).addClass('fa-regular');
        }
    });

    // 관심상품 팝업알림창에서 '확인' 클릭하면 팝업알림창 사라짐
    $('.popup_like .ok').click(function () {
        $('.popup_like').css({ display: 'none' });
    });

    // 장바구니 버튼 토글 설정
    $('.like_bag_btn .bag i').click(function () {
        // 취소: 만약 on 클래스 있다면, on 클래스를 지워라.
        // 버튼클릭: 만약 그렇지 않으면, on 클래스를 넣어라.

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            // !!!!!!!!!! '장바구니에서 상품이 삭제되었습니다.' 팝업알림창 등장 자리!!!!!!!!!!
        } else {
            $(this).addClass('on');
            // 장바구니 팝업알림창(popup_bag1) 등장
            $('.popup_bag1').css({ display: 'block' });
            // 질문 : 천천히 등장하게 하려면?
        }
    });

    // 장바구니 팝업알림창에서 '쇼핑 계속하기' 클릭하면 팝업알림창 사라짐
    $('.more_shop').click(function () {
        $('.popup_bag1').css({ display: 'none' });
    });

    // 장바구니 팝업알림창에서 '장바구니 보기' 클릭하면 팝업알림창 사라지고, 장바구니 팝업창 뜸
    $('.go_bag').click(function (e) {
        e.preventDefault();
        $('.popup_bag1').css({ display: 'none' });
        $('.popup_bag2').css({ display: 'block' });
    });

    // 장바구니 팝업창 설정
    // 장바구니 닫기 버튼 누르면 장바구니 팝업창 사라짐
    $('.popup_bag2 .popup>span').click(function () {
        $('.popup_bag2').css({ display: 'none' });
        // 삭제금지!!!! util ul li 의 eq(2) 의 on 클래스도 제거해야함
        $('.util ul li').eq(2).removeClass('on')
    });
    // 선택항목 체크 아이콘 클릭시 색변화
    $('.purchase_list .check').click(function () {
        let check = $(this).attr('src');
        let checkWhite = 'img/check_icon-white.png';
        let checkRed = 'img/check_icon-red.png';
        // 클릭한게 하얀 아이콘이면 빨간색으로 바꾸고, 빨간 아이콘이면 하얀 아이콘으로 바꿔라
        if (check == checkWhite) {
            $(this).attr('src', checkRed);
        } else {
            $(this).attr('src', checkWhite);
        }
    });
    
    // 유틸리티 - 로그인 에서 '로그인' 버튼 클릭시, popup_login 로그인 팝업알림창 등장, 배경 흐려짐
    $('.loginPage .loginBtn').click(function (e) {
        e.preventDefault()
        $('.popup_login').css({ display: 'block' });
        $('.loginPage').css({'filter':'brightness(50%)'})
    });
    // 유틸리티 - 로그인 - popup_login 에서 '확인' 클릭하면 로그인 팝업알림창 사라짐, 배경 밝아짐, 로그인페이지는 사라짐, 메인페이지 등장
    $('.popup_login .ok').click(function () {
        $('.popup_login').css({ display: 'none' });
        $('.loginPage').css({'filter':'brightness(100%)'})
        $('.loginPage').css({ display: 'none' });
        $('.main').css({ display: 'block' });
        $('footer').css({ display: 'flex' });
    });


    // main_section3 의 영양정보/원재료명 토글 설정
    // .titleBox 의 첫 번째 li를 클릭할 때,
    $('.titleBox li:nth-child(1)').click(function () {
        // [분류] .titleBox 의 li 들의 h4 의 클래스를 지우고, .titleBox 의 첫 번째 li 의 h4 에 클래스 on 을 붙여라
        $('.titleBox li h4').removeClass('on');
        $('.titleBox li:nth-child(1) h4').addClass('on');
        // [이미지] .titleBox 의 첫 번째 li 의 img 의 속성값 src 를 img/asset-svg-nutrients-red.png 로 바꾸고,
        $('.titleBox li:nth-child(1) img').attr('src', 'img/asset-svg-nutrients-red.png');
        //          .titleBox 의 두 번째 li 의 img 의 속성값 src 를 img/asset-svg-ingredients-white.png 로 바꿔라
        $('.titleBox li:nth-child(2) img').attr('src', 'img/asset-svg-ingredients-white.png');
        // [내용] .contentBox 의 li 들의 클래스를 지우고, .contentBox 의 첫 번째 li 에 클래스 on 을 붙여라
        $('.contentBox li').removeClass('on');
        $('.contentBox li:nth-child(1)').addClass('on');
    });
    // .titleBox 의 두 번째 li를 클릭할 때,
    $('.titleBox li:nth-child(2)').click(function () {
        // [분류] .titleBox 의 li 들의 h4 의 클래스를 지우고, .titleBox 의 두 번째 li 의 h4 에 클래스 on 을 붙여라
        $('.titleBox li h4').removeClass('on');
        $('.titleBox li:nth-child(2) h4').addClass('on');
        // [이미지] .titleBox 의 첫 번째 li 의 img 의 속성값 src 를 img/asset-svg-nutrients-white.png 로 바꾸고,
        $('.titleBox li:nth-child(1) img').attr('src', 'img/asset-svg-nutrients-white.png');
        //          .titleBox 의 두 번째 li 의 img 의 속성값 src 를 img/asset-svg-ingredients-red.png 로 바꿔라
        $('.titleBox li:nth-child(2) img').attr('src', 'img/asset-svg-ingredients-red.png');
        // [내용] .contentBox 의 두 번째 li 에 클래스 on 을 붙여라
        $('.contentBox li').removeClass('on');
        $('.contentBox li:nth-child(2)').addClass('on');
    });

    // 비디오 팝업 설정
    // .main_section4 의 .historyMain 의 .imgBox 를 클릭하면,
    $('.main_section4 .historyMain .imgBox').click(function () {
        // .popup_vid 가 보여라.
        $('.popup_vid').fadeIn();
    });
    // .popup_vid 의 span 을 클릭하면,
    $('.popup_vid span').click(function () {
        // .popup_vid 가 사라져라
        $('.popup_vid').fadeOut();
    });

    // 비디오 리스트 클릭 설정
    // 1. 사진 변화
    // .historySub 의 li를 클릭하면,
    $('.historySub li').click(function () {
        let i = $(this).index();
        // .historySub 의 li img 의 속성값 src 를 가져와서
        let historyImg = $('.historySub li').eq(i).find('img').attr('src');
        console.log(historyImg);
        // .historyMain 의 img 의 속성값 src에 넣어라.
        $('.historyMain img').attr('src', historyImg);
        // 2. 텍스트 변화
        // 만약 i == 1 이라면,
        if (i == 0) {
            // .historyMain 의 h3 텍스트 1922년으로
            $('.historyMain h3').text('1920');
            // .historyMain 의 h4 텍스트 변경
            $('.historyMain h4').text('작은 사탕가게');
            // .historyMain 의 p 텍스트 변경
            $('.historyMain p').text(
                '한스 리겔은 1893년 본 근교에 있는 프리스도르프(Friesdorf)에서 태어났습니다. 그는 제과사 교육을 이수한 후에 Heinen & Riegel 회사의 공동 소유주가 됩니다. 1920년 12월 13일, 그는 HARIBO(HAns RIegel BOnn)를 설립하고 설탕 한 자루, 석판 하나, 의자 하나, 화덕 하나, 구리 솥 하나 그리고 롤러 하나를 가지고 집 뒷마당에 딸린 작은 세탁실에서 사탕류를 생산하기 시작합니다. 1921년 그의 아내 게르트루드가 젊은 회사의 첫 번째 직원이 됩니다.'
            );
        } else if (i == 1) {
            $('.historyMain h3').text('1922');
            $('.historyMain h4').text('댄싱베어 출시');
            $('.historyMain p').text(
                '한스 리겔이 하리보의 성공을 위한 첫 번째 초석을 다집니다. 그는 과일젤리로 만든 곰모양의 댄싱베어(Dancing bear)를 탄생시킵니다. 이 곰은 현재의 골드베어보다 키가 크고 날씬했습니다. 두 마리의 댄싱베어는 당시 인플레이션에 시달리는 독일에서 단 1 페니에 불과했습니다.'
            );
        } else if (i == 2) {
            $('.historyMain h3').text('1923');
            $('.historyMain h4').text('최초의 회사 자동차');
            $('.historyMain p').text(
                '수요의 증가는 현대의 운송 수단에 대한 첫 투자를 이끌어냅니다. 하리보는 처음으로 광고 표지가 부착된 차량을 구매하여 고객에게 배송을 시작합니다. 그 이전에는 아내 게르트루드가 일일생산품을 자전거로 배달하였습니다.'
            );
        } else if (i == 3) {
            $('.historyMain h3').text('1923');
            $('.historyMain h4').text('리겔 가족');
            $('.historyMain p').text(
                '한스는 세 자녀 중 큰 아들로 태어났습니다. 1924년에 딸 아니타가, 1926년에는 아들 파울이 태어납니다. 한스와 파울은 1940년대 중반에 하리보 회사 경영을 인수받게 됩니다.'
            );
        } else if (i == 4) {
            $('.historyMain h3').text('1925');
            $('.historyMain h4').text('최초의 감초 제품 생산');
            $('.historyMain p').text(
                '하리보 성공의 두 번째 초석: 한스 리겔이 감초 제품을 생산하기 시작합니다. 하리보 로고가 새겨진 감초 스틱이 첫 번째로 큰 인기를 끌었습니다. 이어서 현재 세계적으로 유명한 감초 타이어 젤리를 비롯한 특별한 제품들이 다양하게 출시됩니다. 그리고 댄싱베어에게 블랙베어 사촌이 생겨납니다.'
            );
        }
    });

    // main_section5 의 품질 카테고리 호버 이미지 변화 설정
    // 1. 옆 카테고리 호버시 이미지 변화
    // - 들어갈 때
    $('.rightTxtBox li').mouseenter(function (e) {
        e.preventDefault();

        let ii = $(this).index();

        $('.boxInnerA-' + (ii + 1))
            .find('img')
            .css({ opacity: ' 0.5' });
        $('.boxInnerA-' + (ii + 1))
            .find('p')
            .css({ opacity: ' 1' });
    });
    // - 나올 때
    $('.rightTxtBox li').mouseleave(function (e) {
        e.preventDefault();

        let iii = $(this).index();

        $('.boxInnerA-' + (iii + 1))
            .find('img')
            .css({ opacity: '1' });
        $('.boxInnerA-' + (iii + 1))
            .find('p')
            .css({ opacity: '0' });
    });
    // 2. 이미지 자체 호버시 이미지 변화
    // - 들어갈 때
    $('.boxA').mouseenter(function () {
        if ($(this).hasClass('boxInnerA-1')) {
            $(this).find('img').css({ opacity: '0.5' });
            $(this).find('p').css({ opacity: '1' });
        } else if ($(this).hasClass('boxInnerA-2')) {
            $(this).find('img').css({ opacity: '0.5' });
            $(this).find('p').css({ opacity: '1' });
        } else if ($(this).hasClass('boxInnerA-3')) {
            $(this).find('img').css({ opacity: '0.5' });
            $(this).find('p').css({ opacity: '1' });
        } else if ($(this).hasClass('boxInnerA-4')) {
            $(this).find('img').css({ opacity: '0.5' });
            $(this).find('p').css({ opacity: '1' });
        } else if ($(this).hasClass('boxInnerA-5')) {
            $(this).find('img').css({ opacity: '0.5' });
            $(this).find('p').css({ opacity: '1' });
        }
    });
    // - 나올 때
    $('.boxA').mouseleave(function () {
        if ($(this).hasClass('boxInnerA-1')) {
            $(this).find('img').css({ opacity: '1' });
            $(this).find('p').css({ opacity: '0' });
        } else if ($(this).hasClass('boxInnerA-2')) {
            $(this).find('img').css({ opacity: '1' });
            $(this).find('p').css({ opacity: '0' });
        } else if ($(this).hasClass('boxInnerA-3')) {
            $(this).find('img').css({ opacity: '1' });
            $(this).find('p').css({ opacity: '0' });
        } else if ($(this).hasClass('boxInnerA-4')) {
            $(this).find('img').css({ opacity: '1' });
            $(this).find('p').css({ opacity: '0' });
        } else if ($(this).hasClass('boxInnerA-5')) {
            $(this).find('img').css({ opacity: '1' });
            $(this).find('p').css({ opacity: '0' });
        }
    });
});
