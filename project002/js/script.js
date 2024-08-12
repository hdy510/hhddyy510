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
    
    // //  GNB 유저 아이콘 클릭시, loginPage 페이지 등장
    // $('.util ul li').eq(3).click(function(e){
    //     e.preventDefault()
    //     $('.main').hide()
    //     $('.sub').hide()
    //     $('footer').hide()
    //     $('.loginPage').css({'display':'flex'})
    // })
    
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
        // $('.main_section3 .topBox').each(function () {
        //     if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
        //         $(this).addClass('visible');
        //     }
        // });
        //  main_section3 middleBox 등장
        // $('.main_section3 .middleBox').each(function () {
        //     if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
        //         $(this).addClass('visible');
        //     }
        // });
        //  main_section3 bottomBox 등장
        // $('.main_section3 .bottomBox').each(function () {
        //     if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
        //         $(this).addClass('visible');
        //     }
        // });
        //  main_section4 intro 등장
        // $('.main_section4 .intro').each(function () {
        //     if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
        //         $(this).addClass('visible');
        //     }
        // });
        //  main_section4 historyMain 과 historySub 등장
        $('.main_section4 .historyMain').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                // $(this).addClass('visible');
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

    // 관심상품 버튼 토글 설정
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
    // 서브페이지에서도 관심상품 좋아요 버튼 토글 설정
    $('.sub_section1 .bottomBox li').eq(0).click(function () {
        // 버튼클릭: 만약 li 에 on 클래스가 없다면, on 클래스를 추가해라
        // 취소: 만약 그렇지 않으면, on 클래스를 지워라
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
            // 관심상품 팝업알림창(popup_like) 등장
            $('.popup_like').css({ display: 'block' });
        }
    });

    // 관심상품 팝업알림창에서 '확인' 클릭하면 팝업알림창 사라짐
    $('.popup_like .ok').click(function () {
        $('.popup_like').css({ display: 'none' });
    });

    // 장바구니 버튼 토글 설정
    // bagNum 전역 변수 설정
    let bagNum = 1
    // 1. main_section2
    $('.main_section2 .like_bag_btn .bag i').click(function () {
        // 아이콘의 색이 변화하게 on 클래스를 넣어라.
        $(this).addClass('on');
        // 장바구니 팝업알림창(popup_bag1) 등장
        $('.popup_bag1').css({ display: 'block' });

        // .util 의 ul li 의 eq(2)의 span 에 on 클래스 추가
        $('.util ul li').eq(2).find('span').addClass('on');
        // 클릭할 때마다 .util 의 ul li 의 eq(2)의 span 에 text 1씩 증가
        $('.util ul li').eq(2).find('span').text(bagNum);
        bagNum++;

        // // 누른 장바구니 버튼에 해당하는 상품의 li 의 순번을 찾아라
        let productIndex = $(this).closest('li').index();
        // 누른 장바구니 버튼에  해당하는 상품의 가격을 찾아라
        let productPrice = $(this).closest('li').find('.price b').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let productPriceParse = parseInt(productPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합 가격을 찾기
        let sumPrice = $('.popup_bag2 .total_price em').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let sumPriceParse = parseInt(sumPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합가격 + 누른 상품의 가격
        let finalPrice = sumPriceParse + productPriceParse;
        // 총합 가격을 변경
        $('.popup_bag2 .total_price em').text(finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원');
        // 그 순번에 맞는 상품을 장바구니에 추가해라
        if (productIndex == 0) {
            // popup_bag2 의 purchase_list 에 각 상품에 맞는 li 를 추가해라
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_goldbaren.png" alt="" class="product"><span>골드베렌 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 1) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_starmix.png" alt="" class="product"><span>스타믹스 (100g, 1개입)</span><b>1,200원</b></li>'
            );
        } else if (productIndex == 2) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_happycola.png" alt="" class="product"><span>해피 콜라 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 3) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_worms.png" alt="" class="product"><span>웜즈 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 4) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_fruitybussi.png" alt="" class="product"><span>프루티 부시 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 5) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_wormszourr.png" alt="" class="product"><span>웜즈 사우어 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 6) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_happycolazourr.png" alt="" class="product"><span>해피 콜라 사우어 (100g, 1개입)</span><b>1,050원</b></li>'
            );
        } else if (productIndex == 7) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_happygrapes.png" alt="" class="product"><span>해피 그레이프 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        }
        
        // 조건문 쓰는 대신 다른 방법 - 제목과 가격 간격 문제로 사용하지 않음
        // 누른 장바구니 버튼에 해당하는 상품의 li 의 .imgBox 와 h4 와 .price 의 내용을 찾아라
        // let productImg = $(this).closest('li').find('.imgBox').html();
        // console.log(productImg)
        // let productName = $(this).closest('li').find('h4').html();
        // let productPrice = $(this).closest('li').find('.price').html();
        // // popup_bag2 의 purchase_list 에 각 상품에 맞는 li 를 추가해라
        // $('.popup_bag2 .purchase_list').append(
        //     '<li><img src="img/check_icon-white.png" alt="" class="check">'+(productImg+productName+productPrice)+'</li>'
        // );
    });
    // 2. main_section3
    $('.main_section3 .like_bag_btn .bag i').click(function () {
        // 아이콘의 색이 변화하게 on 클래스를 넣어라.
        $(this).addClass('on');
        // 장바구니 팝업알림창(popup_bag1) 등장
        $('.popup_bag1').css({ display: 'block' });

        // .util 의 ul li 의 eq(2)의 span 에 on 클래스 추가
        $('.util ul li').eq(2).find('span').addClass('on');
        // 클릭할 때마다 .util 의 ul li 의 eq(2)의 span 에 text 1씩 증가
        $('.util ul li').eq(2).find('span').text(bagNum);
        bagNum++;

        // 누른 장바구니 버튼에  해당하는 상품의 가격을 찾아라
        let productPrice = $('.main_section3 .bottomBox').find('.price b').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let productPriceParse = parseInt(productPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합 가격을 찾기
        let sumPrice = $('.popup_bag2 .total_price em').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let sumPriceParse = parseInt(sumPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합가격 + 누른 상품의 가격
        let finalPrice = sumPriceParse + productPriceParse;
        // 총합 가격을 변경
        $('.popup_bag2 .total_price em').text(finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원');
        
        // popup_bag2 의 purchase_list 에 상품에 맞는 li 를 추가해라
        $('.popup_bag2 .purchase_list').append(
            '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_goldbaren.png" alt="" class="product"><span>골드베렌 (100g, 1개입)</span><b>1,500원</b></li>'
        );
    });
    // 3. main_section6
    $('.main_section6 .like_bag_btn .bag i').click(function () {
        // 아이콘의 색이 변화하게 on 클래스를 넣어라.
        $(this).addClass('on');
        // 장바구니 팝업알림창(popup_bag1) 등장
        $('.popup_bag1').css({ display: 'block' });

        // .util 의 ul li 의 eq(2)의 span 에 on 클래스 추가
        $('.util ul li').eq(2).find('span').addClass('on');
        // 클릭할 때마다 .util 의 ul li 의 eq(2)의 span 에 text 1씩 증가
        $('.util ul li').eq(2).find('span').text(bagNum);
        bagNum++;

        // // 누른 장바구니 버튼에 해당하는 상품의 li 의 순번을 찾아라
        let productIndex = $(this).closest('li').index();
        // 누른 장바구니 버튼에  해당하는 상품의 가격을 찾아라
        let productPrice = $(this).closest('li').find('.price b').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let productPriceParse = parseInt(productPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합 가격을 찾기
        let sumPrice = $('.popup_bag2 .total_price em').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let sumPriceParse = parseInt(sumPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합가격 + 누른 상품의 가격
        let finalPrice = sumPriceParse + productPriceParse;
        // 총합 가격을 변경
        $('.popup_bag2 .total_price em').text(finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원');
        
        // 그 순번에 맞는 상품을 장바구니에 추가해라
        if (productIndex == 0 || productIndex == 1) {
            // popup_bag2 의 purchase_list 에 각 상품에 맞는 li 를 추가해라
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_starmix.png" alt="" class="product"><span>스타믹스 (100g, 1개입)</span><b>1,200원</b></li>'
            );
        } else if (productIndex == 2) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_worms.png" alt="" class="product"><span>웜즈 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 3) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_happycola.png" alt="" class="product"><span>해피콜라 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        }
    });
    // 4. 서브페이지 장바구니
    $('.sub_section1 .bottomBox li').eq(1).click(function () {
        // 아이콘의 색이 변화하게 on 클래스를 넣어라.
        $(this).addClass('on');
        // 장바구니 팝업알림창(popup_bag1) 등장
        $('.popup_bag1').css({ display: 'block' });

        // .util 의 ul li 의 eq(2)의 span 에 on 클래스 추가
        $('.util ul li').eq(2).find('span').addClass('on');
        // 클릭할 때마다 .util 의 ul li 의 eq(2)의 span 에 text 주문 수량 만큼 증가
        let orderNum = $('.sub_section1 .detail_content .btn').find('input').val();
        // 숫자로 변환
        let bagNumParse = parseInt(bagNum, 10);
        let orderNumParse = parseInt(orderNum, 10);
        let presentNum = $('.util ul li').eq(2).find('span').text();
        if (presentNum == '') {
            presentNum = 0;
        }
        let presentNumParse = parseInt(presentNum, 10);
        $('.util ul li').eq(2).find('span').text(presentNumParse+orderNumParse);

        // 누른 장바구니 버튼에  해당하는 상품의 가격을 찾아라
        let productPrice = $('.sub_section1').find('.total_price span').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let productPriceParse = parseInt(productPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합 가격을 찾기
        let sumPrice = $('.popup_bag2 .total_price em').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let sumPriceParse = parseInt(sumPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합가격 + 누른 상품의 가격
        let finalPrice = sumPriceParse + productPriceParse;
        // 총합 가격을 변경
        $('.popup_bag2 .total_price em').text(finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원');
        // popup_bag2 의 purchase_list 에 상품 갯수에 맞게 li 를 추가해라
        for (let i = 0; i < orderNum; i++) {
            $('.popup_bag2 .purchase_list').append(
            '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_goldbaren.png" alt="" class="product"><span>골드베렌 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        }
    });
    // 5. 서브페이지 이런 상품은 어때요? 장바구니
    $('.sub_section2 .like_bag_btn .bag i').click(function () {
        // 아이콘의 색이 변화하게 on 클래스를 넣어라.
        $(this).addClass('on');
        // 장바구니 팝업알림창(popup_bag1) 등장
        $('.popup_bag1').css({ display: 'block' });

        // .util 의 ul li 의 eq(2)의 span 에 on 클래스 추가
        $('.util ul li').eq(2).find('span').addClass('on');
        // 클릭할 때마다 .util 의 ul li 의 eq(2)의 span 에 text 주문 수량 만큼 증가
        let orderNum = 1
        // 숫자로 변환
        let bagNumParse = parseInt(bagNum, 10);
        let orderNumParse = parseInt(orderNum, 10);
        let presentNum = $('.util ul li').eq(2).find('span').text();
        if (presentNum == '') {
            presentNum = 0;
        }
        let presentNumParse = parseInt(presentNum, 10);
        $('.util ul li').eq(2).find('span').text(presentNumParse+orderNumParse);

        // // 누른 장바구니 버튼에 해당하는 상품의 li 의 순번을 찾아라
        let productIndex = $(this).closest('li').index();
        // 누른 장바구니 버튼에  해당하는 상품의 가격을 찾아라
        let productPrice = $(this).closest('li').find('.price b').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let productPriceParse = parseInt(productPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합 가격을 찾기
        let sumPrice = $('.popup_bag2 .total_price em').text();
        // '원' 문자를 제거하고 ','를 제거한 후 정수로 변환
        let sumPriceParse = parseInt(sumPrice.replace('원', '').replace(',', ''), 10);
        // 지금까지의 총합가격 + 누른 상품의 가격
        let finalPrice = sumPriceParse + productPriceParse;
        // 총합 가격을 변경
        $('.popup_bag2 .total_price em').text(finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원');
        
        // 그 순번에 맞는 상품을 장바구니에 추가해라
        if (productIndex == 0) {
            // popup_bag2 의 purchase_list 에 각 상품에 맞는 li 를 추가해라
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_starmix.png" alt="" class="product"><span>스타믹스 (100g, 1개입)</span><b>1,200원</b></li>'
            );
        } else if (productIndex == 1) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_happycola.png" alt="" class="product"><span>해피 콜라 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 2) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_worms.png" alt="" class="product"><span>웜즈 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 3) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_fruitybussi.png" alt="" class="product"><span>프루티 부시 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 4) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_wormszourr.png" alt="" class="product"><span>웜즈 사우어 (100g, 1개입)</span><b>1,500원</b></li>'
            );
        } else if (productIndex == 5) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_happycolazourr.png" alt="" class="product"><span>해피 콜라 사우어 (100g, 1개입)</span><b>1,050원</b></li>'
            );
        } else if (productIndex == 6) {
            $('.popup_bag2 .purchase_list').append(
                '<li><img src="img/check_icon-white.png" alt="" class="check"><img src="img/section2_happygrapes.png" alt="" class="product"><span>해피 그레이프 (100g, 1개입)</span><b>1,500원</b></li>'
            );
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
        // 장바구니 알림 팝업도 제거
        $('.popup_bag1').css({ display: 'none' });
        // 삭제금지!!!! util ul li 의 eq(2) 의 on 클래스도 제거해야함
        $('.util ul li').eq(2).removeClass('on')
    });
    // 선택항목 체크 아이콘 클릭시 색변화
    $('.purchase_list .check').click(function () {
        console.log('클릭');
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
    // 장바구니 비우기 버튼 클릭시, .bagBox 의 li 들을 모두 삭제
    $('.popup_bag2_button').find('.empty').click(function(){
        $('.purchase_list').empty();
        // .util 의 장바구니의 숫자를 0으로 바꿔라
        $('.util ul li').eq(2).find('span').text('0');
        // .util 의 장바구니의 숫자가 0이면 on 클래스를 제거해라
        if($('.util ul li').eq(2).find('span').text() == '0'){
            $('.util ul li').eq(2).find('span').removeClass('on');
        }
        // bagNum 변수를 1로 초기화
        bagNum = 1;

        // 총합 가격을 변경
        $('.popup_bag2 .total_price em').text('0원');

        // .like_bag_btn 의 장바구니 아이콘에 on 클래스를 제거해라
        $('.like_bag_btn .bag i').removeClass('on');

        // 서브페이지의 장바구니 버튼 색 빠짐
        $('.sub_section1 .bottomBox li').eq(1).removeClass('on');
    })

    // // 유틸리티 - 로그인 에서 '로그인' 버튼 클릭시, popup_login 로그인 팝업알림창 등장, 배경 흐려짐
    // $('.loginPage .loginBtn').click(function (e) {
    //     e.preventDefault()
    //     $('.popup_login').css({ display: 'block' });
    //     $('.loginPage').css({'filter':'brightness(50%)'})
    // });
    // // 유틸리티 - 로그인 - popup_login 에서 '확인' 클릭하면 로그인 팝업알림창 사라짐, 배경 밝아짐, 로그인페이지는 사라짐, 메인페이지 등장
    // $('.popup_login .ok').click(function () {
    //     $('.popup_login').css({ display: 'none' });
    //     $('.loginPage').css({'filter':'brightness(100%)'})
    //     $('.loginPage').css({ display: 'none' });
    //     $('.main').css({ display: 'block' });
    //     $('footer').css({ display: 'flex' });
    // });

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
    // 함수 설정!
    function updateHistoryMain(h3Text, h4Text, pText) {
        // .historyMain 의 h3 텍스트 변경
        $('.historyMain h3').text(h3Text);
        // .historyMain 의 h4 텍스트 변경
        $('.historyMain h4').text(h4Text);
        // .historyMain 의 p 텍스트 변경
        $('.historyMain p').text(pText);
    }

    // 1. 사진 변화

    // 비디오 좌우 버튼클릭시 컨텐츠 변화, 리스트 이동 설정
    // historyIndex 전역변수 설정
    let historyIndex = 0;
    // 1. 오른쪽 버튼 클릭시, 다음 컨텐츠로 이동
    $('.main_section4 .historyMain .right_btn').click(function () {
        // historyIndex 1씩 증가
        historyIndex++;
        if (historyIndex == 27 ) {
            historyIndex = 26;
        }
        // .historySub 의 li img 의 속성값 src 를 가져와서
        let historyImg = $('.historySub li').eq(historyIndex).find('img').attr('src');
        // .historyMain 의 img 의 속성값 src에 넣어라.
        $('.historyMain img').attr('src', historyImg);

        // 2. 텍스트 변화
        if (historyIndex == 0) {
            updateHistoryMain(
                '1922', 
                '작은 사탕가게', 
                '한스 리겔은 1893년 본 근교에 있는 프리스도르프(Friesdorf)에서 태어났습니다. 그는 제과사 교육을 이수한 후에 Heinen & Riegel 회사의 공동 소유주가 됩니다. 1920년 12월 13일, 그는 HARIBO(HAns RIegel BOnn)를 설립하고 설탕 한 자루, 석판 하나, 의자 하나, 화덕 하나, 구리 솥 하나 그리고 롤러 하나를 가지고 집 뒷마당에 딸린 작은 세탁실에서 사탕류를 생산하기 시작합니다. 1921년 그의 아내 게르트루드가 젊은 회사의 첫 번째 직원이 됩니다.'
            );
        } else if (historyIndex == 1) {
            updateHistoryMain(
                '1922', 
                '댄싱베어 출시', 
                '한스 리겔이 하리보의 성공을 위한 첫 번째 초석을 다집니다. 그는 과일젤리로 만든 곰모양의 댄싱베어(Dancing bear)를 탄생시킵니다. 이 곰은 현재의 골드베어보다 키가 크고 날씬했습니다. 두 마리의 댄싱베어는 당시 인플레이션에 시달리는 독일에서 단 1 페니에 불과했습니다.'
            );
        } else if (historyIndex == 2) {
            updateHistoryMain(
                '1923', 
                '최초의 회사 자동차', 
                '수요의 증가는 현대의 운송 수단에 대한 첫 투자를 이끌어냅니다. 하리보는 처음으로 광고 표지가 부착된 차량을 구매하여 고객에게 배송을 시작합니다. 그 이전에는 아내 게르트루드가 일일생산품을 자전거로 배달하였습니다.'
            );
        } else if (historyIndex == 3) {
            updateHistoryMain(
                '1923', 
                '리겔 가족', 
                '한스는 세 자녀 중 큰 아들로 태어났습니다. 1924년에 딸 아니타가, 1926년에는 아들 파울이 태어납니다. 한스와 파울은 1940년대 중반에 하리보 회사 경영을 인수받게 됩니다.'
            );
        } else if (historyIndex == 4) {
            updateHistoryMain(
                '1925', 
                '최초의 감초 제품 생산', 
                '하리보 성공의 두 번째 초석: 한스 리겔이 감초 제품을 생산하기 시작합니다. 하리보 로고가 새겨진 감초 스틱이 첫 번째로 큰 인기를 끌었습니다. 이어서 현재 세계적으로 유명한 감초 타이어 젤리를 비롯한 특별한 제품들이 다양하게 출시됩니다. 그리고 댄싱베어에게 블랙베어 사촌이 생겨납니다.'
            );
        } else if (historyIndex == 5) {
            updateHistoryMain(
                '1930', 
                '중기업으로 성장', 
                '영업 담당자가 이제 독일 전역에 하리보 제품을 공급합니다. 회사는 1933년에 이르러 400명의 직원으로 구성된 견고한 중기업으로 성장합니다. 동시에 본(Bonn)에 생산 시설 본관이 완공됩니다. 이때 천재적인 새로운 아이디어로 간단하면서도 기억에 남는 광고 슬로건이 탄생합니다. "하리보는 아이들을 행복하게 해줍니다". 또한 댄싱베어는 새로운 친척인 테디베어를 얻게됩니다.'
            );
        } else if (historyIndex == 6) {
            updateHistoryMain(
                '1945', 
                '역경의 시기', 
                '전쟁으로 인한 원료 부족은 경제에 악영향을 끼쳤고, 하리보 또한 그 영향을 피해갈 수 없었습니다. 1945년 창업자 한스 리겔이 52세의 나이로 사망하게 됩니다. 그의 아내 게르트루드는 2차 세계 대전이 끝난 후 초반에 그를 대신해 경영직을 인수받게 됩니다.'
            );
        } else if (historyIndex == 7) {
            updateHistoryMain(
                '1946', 
                '세대 교체', 
                '2차 세계 대전이 끝나고 겨우 30명의 직원으로 회사를 다시 재건하기 시작합니다. 1946년 한스와 파울 형제가 어머니로부터 회사 경영을 승계받습니다. 한스 리겔 박사는 마케팅 및 판매를 포함한 비즈니스 부문을 담당합니다. 동생인 파울은 생산 분야를 총괄합니다. 얼마 지나지 않아 성공적인 결실을 맺게 됩니다. 그 결과 하리보는 1950년, 전쟁이 끝난지 5년만에 1,000 여명의 직원을 채용하는 회사로 성장합니다.'
            );
        } else if (historyIndex == 8) {
            updateHistoryMain(
                '1960', 
                '골드베렌 탄생!', 
                '하리보 골드베렌 제품이 출시됩니다. 달콤한 골드베렌이 컬트 브랜드로 대성공을 얻게 되면서, 하리보는 골드베렌에게 공식 출생 증명서를 발급해 줍니다. 1967년, 골드베렌은 독일 특허청에서 공식적으로 등록상표로 인정받게 됩니다. 골드베렌은 단순한 젤리 곰 그 이상의 의미를 가지고 있습니다. 이곳에서 하리보 베스트 제품, 골드베렌에 대한 모든 것을 살펴보세요.'
            );
        } else if (historyIndex == 9) {
            updateHistoryMain(
                '1962', 
                'TV에 처음 출연한 하리보', 
                "하리보는 당시 새로운 텔레비전 매체의 중요성을 조기에 인지하였습니다. 이에 발맞춰 독일 TV에서 처음으로 하리보 광고가 방송됩니다. 1960년대 중반, '하리보는 아이들을 행복하게 해줍니다'라는 광고 슬로건에 '그리고 어른들도요'라는 문구를 추가합니다. 하리보 유튜브 채널에서 50년이 넘는 역사 속의 하리보 TV광고 내용을 확인해 보세요."
            );
        } else if (historyIndex == 10) {
            updateHistoryMain(
                '1978', 
                '새로운 모양의 골드베어', 
                '70년대에는 소비자들의 미적 감각이 변하기 시작합니다. 이에 따라 곰돌이의 모양도 달라집니다. 상대적으로 넓게 바깥쪽을 향하던 발을 좁혀 곰돌이의 모습은 지금의 작고 세련된 모양을 갖추게 됩니다.'
            );
        } else if (historyIndex == 11) {
            updateHistoryMain(
                '1986', 
                '하리보에 통합된 MAOAM', 
                '하리보가 노이스에 위치한 Edmund Münster GmbH & Co. KG 사를 인수합니다. 전통적인 MAOAM 브랜드는 이제 하리보 그룹의 일부가 됩니다. MAOAM 로고는 출시 이후 대부분 그대로 유지되어 고유한 모습을 간직하고 있습니다. MAOAM은 오래전부터 전통을 지닌 가장 유명한 상표 중 하나입니다.'
            );
        } else if (historyIndex == 12) {
            updateHistoryMain(
                '1989', 
                '골드베렌의 새로운 색상', 
                '골드베렌의 외관 변화: 이제 인기 젤리곰에 과일 및 식물 농축물이 사용되면서, 외관 색상이 약간 옅어지게 됩니다. 빨간색 나비넥타이를 맨 노란색 골드베어 그림이 표지에 처음으로 등장합니다.'
            );
        } else if (historyIndex == 13) {
            updateHistoryMain(
                '1991', 
                '하리보 모델로 등장하는 고트샬크', 
                '하리보와 당시 인기 연예인인 토마스 고트샬크(Thomas Gottschalk)간의 광고 파트너십이 시작되었고 이것은 2015년까지 이어집니다. 이 독특하고 견고한 24년간의 광고 파트너십은 기네스 북에도 올랐습니다.'
            );
        } else if (historyIndex == 14) {
            updateHistoryMain(
                '1996', 
                '마시멜로우 등장', 
                '하리보는 벨기에 제과 회사인 둘키아(Dulcia) 사를 인수합니다. 이 회사는 인기있는 마시멜로우 제품 Soft-Kiss, Coco-Balls 및 Rombiss를 수십 년 동안 생산해 왔습니다. 2007년 중반에 Dulcia라는 이름이 포장에서 사라지고 고객은 이제 슈퍼마켓에서 HARIBO Chamallows라는 이름으로 마시멜로우 제품을 찾을 수 있게 됩니다.'
            );
        } else if (historyIndex == 15) {
            updateHistoryMain(
                '2006', 
                '파울리겔에 헌정하는 본', 
                '본(Bonn) 시는 경제 도시 본을 위해 노력한 파울 리겔의 "훌륭한 공로"를 인정하여 도시 "Golden Book"에 이름을 올리며 경의를 표합니다.'
            );
        } else if (historyIndex == 16) {
            updateHistoryMain(
                '2007', 
                '85주년 하리보 골드베렌', 
                '85주년을 맞은 골드베렌이 새로운 맛과 포장 디자인 그리고 변함없는 행복한 미소를 담아 다시 탄생하게 됩니다. 그리고 여섯 번째 맛으로 “사과”가 추가됩니다. 이를 통해 소비자들에게 즐거움이 더해졌습니다. 골드베렌이 더 풍성해졌어요!'
            );
        } else if (historyIndex == 17) {
            updateHistoryMain(
                '2008', 
                '시선을 사로잡는 광고', 
                '10년이 지속된 특별한 콜래보레이션의 시작: 투이플라이 항공사의 보잉 737-800기 두 대가 독점적인 하리보 골드베어 디자인인 GoldbAIR와 2010년부터는 HaribAIR와 함께 "하늘을 나는 홍보대사"로 활동하였습니다. 2015년 5월부터는 화려한 열대과일 디자인의 비행기가 HARIBO / TUIfly 항공기에 합류하게 됩니다.'
            );
        } else if (historyIndex == 18) {
            updateHistoryMain(
                '2009', 
                '샤프트 골드베렌 탄생!', 
                '과즙이 25% 더 첨가된 샤프트 골드베렌(Saft Goldbaren)이 말랑말랑한 식감으로 출시되었습니다. 이 제품은 독일 소비자 잡지 ‘LEBENSMITTEL PRAXIS’로부터 "2009 베스트셀러” 상을 수여받았으며 식품 산업 전문 저널인 ‘Rundschau für den Lebensmittelhandel’에서 "2009 베스트셀러"로 선정되었습니다.'
            );
        } else if (historyIndex == 19) {
            updateHistoryMain(
                '2009', 
                '한스 리겔 박사 슈발리에 훈장 등급', 
                '프랑스 외무부가 한스 리겔에게 기사 즉, “슈발리에(Chevalier)”로서 최고 훈장인 "레지옹 도뇌르(Légion d’ Honneur: 명예로운 군단)를 수여하였습니다. 이것은 소수의 외국인에게만 부여된 명예였습니다. 한스 리겔 박사는 1967년 하리보 브랜드를 프랑스 시장에 출시하였습니다.'
            );
        } else if (historyIndex == 20) {
            updateHistoryMain(
                '2009', 
                '파울 리겔 83세에 사망', 
                '공동 소유자인 파울 리겔이 2009년 8월 2일에 사망합니다. 그는 생산과 기술 부분을 총괄하였습니다. 뛰어난 발명가로서 가장 유명한 제품 중 하나인 감초 타이어 젤리 와인딩 기계를 비롯하여 다양한 기계를 직접 개발했습니다. 파울 리겔은 수많은 사회 프로젝트 및 재단에 참여하면서, 그 중요성을 강조하였습니다.'
            );
        } else if (historyIndex == 21) {
            updateHistoryMain(
                '2010', 
                '하리보와 모터스포츠', 
                "1970년대부터 1990년대까지 모터스포츠에서 성공을 거둔 하리보는 만타이(Manthey) 팀과 함께 트랙으로 돌아갑니다. 이 팀은 하리보 디자인의 포르쉐 두 대로 뉘르부르크링 내구 챔피언십과 24시 내구 레이스(VLN)에서 좋은 성과를 거두었습니다. 2017년 마지막 시즌, 하리보는 메르세데스-AMG 퍼포먼스 팀으로서 '녹색 지옥(Green Hell)'의 24시 내구 레이스에서 9위를 차지했습니다."
            );
        } else if (historyIndex == 22) {
            updateHistoryMain(
                '2013', 
                '한스 리겔 박사 90세에 사망', 
                '2013년 10월 15일 한스 리겔 박사가 사망합니다. 그는 67년 동안 하리보 경영을 총괄하면서 독일에서 가장 오랜 경력을 쌓은 대표이사로 남게됩니다. 그는 하리보 뿐만 아니라 독일과 해외의 제과 산업에 큰 영향을 주었습니다. 한스 리겔 박사는 아이들과 어른들의 삶을 조금 달콤하게 만들어 주고 싶다는 소망으로 자신의 인생을 하리보에 바쳤습니다.'
            );
        } else if (historyIndex == 23) {
            updateHistoryMain(
                '2014', 
                '불리, 하리보 광고의 새로운 얼굴!', 
                '24년 후 토마스 코트샬크와의 광고 파트너십이 종료됩니다. 그는 광고 모델로서 하리보의 얼굴을 대변하는 책임을 미카엘 불리 헤르비그(Michael Bully Herbig)에 넘기면서 다음과 같이 말합니다. "불리 헤르비그가 저의 후계자가 되어서 기뻐요. 이보다 좋을 수 없죠."'
            );
        } else if (historyIndex == 24) {
            updateHistoryMain(
                '2014', 
                '새로운 본사 그라프샤프트', 
                'HARIBO GmbH & Co. KG의 주주들은 2013년 라인란트-팔츠에 위치한 그라프샤프트 지역을 새로운 본사로 결정합니다. 그 다음해에 27헥타르 규모의 부지를 인수하였고, 이곳은 이상적인 교통망과 대형 물류 센터를 위한 공간, 3단계에 걸친 최첨단 생산 라인 및 현대적인 관리 건물을 갖추게 됩니다.'
            );
        } else if (historyIndex == 25) {
            updateHistoryMain(
                '2018', 
                '대규모 이전', 
                '5월 2일, 직원들은 새로운 독일 본사이자 하리보 그룹의 국제본사인 그라프샤프트에서 첫 업무를 시작합니다. 한스 귀도 리겔: "우리와 하리보를 위한 큰 도약이자 회사 역사의 또 다른 중요한 이정표입니다.”라며 다음과 같이 덧붙입니다. "본은 영원히 하리보의 일부로 남아 있을 것입니다.”'
            );
        } else if (historyIndex == 26) {
            updateHistoryMain(
                '2020', 
                '하리보: 100년된 젊은 하리보', 
                '3세대 동안 이어진 가족기업이 2020년 12월 13일에 창립 100주년을 맞이합니다. 100년 동안 하리보 제품은 달콤한 간식과 함께 소소한 행복을 전해 드리고 있습니다. 100주년을 기념하여 매력적인 하리보의 역사를 되돌아보고 무엇보다 미래지향적인 모습으로 소비자들과 함께 "100년의 행복을 함께해요"라는 슬로건으로 축하하고 있습니다.'
            );
        }

        // ul 의 left 값 이동
        $('.historySub ul').css({ left: 880-historyIndex * 140 + 'px' });

    })
    // 2. 왼쪽 버튼 클릭시, 이전 컨텐츠로 이동
    $('.main_section4 .historyMain .left_btn').click(function () {
        // historyIndex 1씩 감소
        historyIndex--;
        if (historyIndex == -1 ) {
            historyIndex = 0;
        }
        // .historySub 의 li img 의 속성값 src 를 가져와서
        let historyImg = $('.historySub li').eq(historyIndex).find('img').attr('src');
        // .historyMain 의 img 의 속성값 src에 넣어라.
        $('.historyMain img').attr('src', historyImg);

        // 2. 텍스트 변화
        if (historyIndex == 0) {
            updateHistoryMain(
                '1922', 
                '작은 사탕가게', 
                '한스 리겔은 1893년 본 근교에 있는 프리스도르프(Friesdorf)에서 태어났습니다. 그는 제과사 교육을 이수한 후에 Heinen & Riegel 회사의 공동 소유주가 됩니다. 1920년 12월 13일, 그는 HARIBO(HAns RIegel BOnn)를 설립하고 설탕 한 자루, 석판 하나, 의자 하나, 화덕 하나, 구리 솥 하나 그리고 롤러 하나를 가지고 집 뒷마당에 딸린 작은 세탁실에서 사탕류를 생산하기 시작합니다. 1921년 그의 아내 게르트루드가 젊은 회사의 첫 번째 직원이 됩니다.'
            );
        } else if (historyIndex == 1) {
            updateHistoryMain(
                '1922', 
                '댄싱베어 출시', 
                '한스 리겔이 하리보의 성공을 위한 첫 번째 초석을 다집니다. 그는 과일젤리로 만든 곰모양의 댄싱베어(Dancing bear)를 탄생시킵니다. 이 곰은 현재의 골드베어보다 키가 크고 날씬했습니다. 두 마리의 댄싱베어는 당시 인플레이션에 시달리는 독일에서 단 1 페니에 불과했습니다.'
            );
        } else if (historyIndex == 2) {
            updateHistoryMain(
                '1923', 
                '최초의 회사 자동차', 
                '수요의 증가는 현대의 운송 수단에 대한 첫 투자를 이끌어냅니다. 하리보는 처음으로 광고 표지가 부착된 차량을 구매하여 고객에게 배송을 시작합니다. 그 이전에는 아내 게르트루드가 일일생산품을 자전거로 배달하였습니다.'
            );
        } else if (historyIndex == 3) {
            updateHistoryMain(
                '1923', 
                '리겔 가족', 
                '한스는 세 자녀 중 큰 아들로 태어났습니다. 1924년에 딸 아니타가, 1926년에는 아들 파울이 태어납니다. 한스와 파울은 1940년대 중반에 하리보 회사 경영을 인수받게 됩니다.'
            );
        } else if (historyIndex == 4) {
            updateHistoryMain(
                '1925', 
                '최초의 감초 제품 생산', 
                '하리보 성공의 두 번째 초석: 한스 리겔이 감초 제품을 생산하기 시작합니다. 하리보 로고가 새겨진 감초 스틱이 첫 번째로 큰 인기를 끌었습니다. 이어서 현재 세계적으로 유명한 감초 타이어 젤리를 비롯한 특별한 제품들이 다양하게 출시됩니다. 그리고 댄싱베어에게 블랙베어 사촌이 생겨납니다.'
            );
        } else if (historyIndex == 5) {
            updateHistoryMain(
                '1930', 
                '중기업으로 성장', 
                '영업 담당자가 이제 독일 전역에 하리보 제품을 공급합니다. 회사는 1933년에 이르러 400명의 직원으로 구성된 견고한 중기업으로 성장합니다. 동시에 본(Bonn)에 생산 시설 본관이 완공됩니다. 이때 천재적인 새로운 아이디어로 간단하면서도 기억에 남는 광고 슬로건이 탄생합니다. "하리보는 아이들을 행복하게 해줍니다". 또한 댄싱베어는 새로운 친척인 테디베어를 얻게됩니다.'
            );
        } else if (historyIndex == 6) {
            updateHistoryMain(
                '1945', 
                '역경의 시기', 
                '전쟁으로 인한 원료 부족은 경제에 악영향을 끼쳤고, 하리보 또한 그 영향을 피해갈 수 없었습니다. 1945년 창업자 한스 리겔이 52세의 나이로 사망하게 됩니다. 그의 아내 게르트루드는 2차 세계 대전이 끝난 후 초반에 그를 대신해 경영직을 인수받게 됩니다.'
            );
        } else if (historyIndex == 7) {
            updateHistoryMain(
                '1946', 
                '세대 교체', 
                '2차 세계 대전이 끝나고 겨우 30명의 직원으로 회사를 다시 재건하기 시작합니다. 1946년 한스와 파울 형제가 어머니로부터 회사 경영을 승계받습니다. 한스 리겔 박사는 마케팅 및 판매를 포함한 비즈니스 부문을 담당합니다. 동생인 파울은 생산 분야를 총괄합니다. 얼마 지나지 않아 성공적인 결실을 맺게 됩니다. 그 결과 하리보는 1950년, 전쟁이 끝난지 5년만에 1,000 여명의 직원을 채용하는 회사로 성장합니다.'
            );
        } else if (historyIndex == 8) {
            updateHistoryMain(
                '1960', 
                '골드베렌 탄생!', 
                '하리보 골드베렌 제품이 출시됩니다. 달콤한 골드베렌이 컬트 브랜드로 대성공을 얻게 되면서, 하리보는 골드베렌에게 공식 출생 증명서를 발급해 줍니다. 1967년, 골드베렌은 독일 특허청에서 공식적으로 등록상표로 인정받게 됩니다. 골드베렌은 단순한 젤리 곰 그 이상의 의미를 가지고 있습니다. 이곳에서 하리보 베스트 제품, 골드베렌에 대한 모든 것을 살펴보세요.'
            );
        } else if (historyIndex == 9) {
            updateHistoryMain(
                '1962', 
                'TV에 처음 출연한 하리보', 
                "하리보는 당시 새로운 텔레비전 매체의 중요성을 조기에 인지하였습니다. 이에 발맞춰 독일 TV에서 처음으로 하리보 광고가 방송됩니다. 1960년대 중반, '하리보는 아이들을 행복하게 해줍니다'라는 광고 슬로건에 '그리고 어른들도요'라는 문구를 추가합니다. 하리보 유튜브 채널에서 50년이 넘는 역사 속의 하리보 TV광고 내용을 확인해 보세요."
            );
        } else if (historyIndex == 10) {
            updateHistoryMain(
                '1978', 
                '새로운 모양의 골드베어', 
                '70년대에는 소비자들의 미적 감각이 변하기 시작합니다. 이에 따라 곰돌이의 모양도 달라집니다. 상대적으로 넓게 바깥쪽을 향하던 발을 좁혀 곰돌이의 모습은 지금의 작고 세련된 모양을 갖추게 됩니다.'
            );
        } else if (historyIndex == 11) {
            updateHistoryMain(
                '1986', 
                '하리보에 통합된 MAOAM', 
                '하리보가 노이스에 위치한 Edmund Münster GmbH & Co. KG 사를 인수합니다. 전통적인 MAOAM 브랜드는 이제 하리보 그룹의 일부가 됩니다. MAOAM 로고는 출시 이후 대부분 그대로 유지되어 고유한 모습을 간직하고 있습니다. MAOAM은 오래전부터 전통을 지닌 가장 유명한 상표 중 하나입니다.'
            );
        } else if (historyIndex == 12) {
            updateHistoryMain(
                '1989', 
                '골드베렌의 새로운 색상', 
                '골드베렌의 외관 변화: 이제 인기 젤리곰에 과일 및 식물 농축물이 사용되면서, 외관 색상이 약간 옅어지게 됩니다. 빨간색 나비넥타이를 맨 노란색 골드베어 그림이 표지에 처음으로 등장합니다.'
            );
        } else if (historyIndex == 13) {
            updateHistoryMain(
                '1991', 
                '하리보 모델로 등장하는 고트샬크', 
                '하리보와 당시 인기 연예인인 토마스 고트샬크(Thomas Gottschalk)간의 광고 파트너십이 시작되었고 이것은 2015년까지 이어집니다. 이 독특하고 견고한 24년간의 광고 파트너십은 기네스 북에도 올랐습니다.'
            );
        } else if (historyIndex == 14) {
            updateHistoryMain(
                '1996', 
                '마시멜로우 등장', 
                '하리보는 벨기에 제과 회사인 둘키아(Dulcia) 사를 인수합니다. 이 회사는 인기있는 마시멜로우 제품 Soft-Kiss, Coco-Balls 및 Rombiss를 수십 년 동안 생산해 왔습니다. 2007년 중반에 Dulcia라는 이름이 포장에서 사라지고 고객은 이제 슈퍼마켓에서 HARIBO Chamallows라는 이름으로 마시멜로우 제품을 찾을 수 있게 됩니다.'
            );
        } else if (historyIndex == 15) {
            updateHistoryMain(
                '2006', 
                '파울리겔에 헌정하는 본', 
                '본(Bonn) 시는 경제 도시 본을 위해 노력한 파울 리겔의 "훌륭한 공로"를 인정하여 도시 "Golden Book"에 이름을 올리며 경의를 표합니다.'
            );
        } else if (historyIndex == 16) {
            updateHistoryMain(
                '2007', 
                '85주년 하리보 골드베렌', 
                '85주년을 맞은 골드베렌이 새로운 맛과 포장 디자인 그리고 변함없는 행복한 미소를 담아 다시 탄생하게 됩니다. 그리고 여섯 번째 맛으로 “사과”가 추가됩니다. 이를 통해 소비자들에게 즐거움이 더해졌습니다. 골드베렌이 더 풍성해졌어요!'
            );
        } else if (historyIndex == 17) {
            updateHistoryMain(
                '2008', 
                '시선을 사로잡는 광고', 
                '10년이 지속된 특별한 콜래보레이션의 시작: 투이플라이 항공사의 보잉 737-800기 두 대가 독점적인 하리보 골드베어 디자인인 GoldbAIR와 2010년부터는 HaribAIR와 함께 "하늘을 나는 홍보대사"로 활동하였습니다. 2015년 5월부터는 화려한 열대과일 디자인의 비행기가 HARIBO / TUIfly 항공기에 합류하게 됩니다.'
            );
        } else if (historyIndex == 18) {
            updateHistoryMain(
                '2009', 
                '샤프트 골드베렌 탄생!', 
                '과즙이 25% 더 첨가된 샤프트 골드베렌(Saft Goldbaren)이 말랑말랑한 식감으로 출시되었습니다. 이 제품은 독일 소비자 잡지 ‘LEBENSMITTEL PRAXIS’로부터 "2009 베스트셀러” 상을 수여받았으며 식품 산업 전문 저널인 ‘Rundschau für den Lebensmittelhandel’에서 "2009 베스트셀러"로 선정되었습니다.'
            );
        } else if (historyIndex == 19) {
            updateHistoryMain(
                '2009', 
                '한스 리겔 박사 슈발리에 훈장 등급', 
                '프랑스 외무부가 한스 리겔에게 기사 즉, “슈발리에(Chevalier)”로서 최고 훈장인 "레지옹 도뇌르(Légion d’ Honneur: 명예로운 군단)를 수여하였습니다. 이것은 소수의 외국인에게만 부여된 명예였습니다. 한스 리겔 박사는 1967년 하리보 브랜드를 프랑스 시장에 출시하였습니다.'
            );
        } else if (historyIndex == 20) {
            updateHistoryMain(
                '2009', 
                '파울 리겔 83세에 사망', 
                '공동 소유자인 파울 리겔이 2009년 8월 2일에 사망합니다. 그는 생산과 기술 부분을 총괄하였습니다. 뛰어난 발명가로서 가장 유명한 제품 중 하나인 감초 타이어 젤리 와인딩 기계를 비롯하여 다양한 기계를 직접 개발했습니다. 파울 리겔은 수많은 사회 프로젝트 및 재단에 참여하면서, 그 중요성을 강조하였습니다.'
            );
        } else if (historyIndex == 21) {
            updateHistoryMain(
                '2010', 
                '하리보와 모터스포츠', 
                "1970년대부터 1990년대까지 모터스포츠에서 성공을 거둔 하리보는 만타이(Manthey) 팀과 함께 트랙으로 돌아갑니다. 이 팀은 하리보 디자인의 포르쉐 두 대로 뉘르부르크링 내구 챔피언십과 24시 내구 레이스(VLN)에서 좋은 성과를 거두었습니다. 2017년 마지막 시즌, 하리보는 메르세데스-AMG 퍼포먼스 팀으로서 '녹색 지옥(Green Hell)'의 24시 내구 레이스에서 9위를 차지했습니다."
            );
        } else if (historyIndex == 22) {
            updateHistoryMain(
                '2013', 
                '한스 리겔 박사 90세에 사망', 
                '2013년 10월 15일 한스 리겔 박사가 사망합니다. 그는 67년 동안 하리보 경영을 총괄하면서 독일에서 가장 오랜 경력을 쌓은 대표이사로 남게됩니다. 그는 하리보 뿐만 아니라 독일과 해외의 제과 산업에 큰 영향을 주었습니다. 한스 리겔 박사는 아이들과 어른들의 삶을 조금 달콤하게 만들어 주고 싶다는 소망으로 자신의 인생을 하리보에 바쳤습니다.'
            );
        } else if (historyIndex == 23) {
            updateHistoryMain(
                '2014', 
                '불리, 하리보 광고의 새로운 얼굴!', 
                '24년 후 토마스 코트샬크와의 광고 파트너십이 종료됩니다. 그는 광고 모델로서 하리보의 얼굴을 대변하는 책임을 미카엘 불리 헤르비그(Michael Bully Herbig)에 넘기면서 다음과 같이 말합니다. "불리 헤르비그가 저의 후계자가 되어서 기뻐요. 이보다 좋을 수 없죠."'
            );
        } else if (historyIndex == 24) {
            updateHistoryMain(
                '2014', 
                '새로운 본사 그라프샤프트', 
                'HARIBO GmbH & Co. KG의 주주들은 2013년 라인란트-팔츠에 위치한 그라프샤프트 지역을 새로운 본사로 결정합니다. 그 다음해에 27헥타르 규모의 부지를 인수하였고, 이곳은 이상적인 교통망과 대형 물류 센터를 위한 공간, 3단계에 걸친 최첨단 생산 라인 및 현대적인 관리 건물을 갖추게 됩니다.'
            );
        } else if (historyIndex == 25) {
            updateHistoryMain(
                '2018', 
                '대규모 이전', 
                '5월 2일, 직원들은 새로운 독일 본사이자 하리보 그룹의 국제본사인 그라프샤프트에서 첫 업무를 시작합니다. 한스 귀도 리겔: "우리와 하리보를 위한 큰 도약이자 회사 역사의 또 다른 중요한 이정표입니다.”라며 다음과 같이 덧붙입니다. "본은 영원히 하리보의 일부로 남아 있을 것입니다.”'
            );
        } else if (historyIndex == 26) {
            updateHistoryMain(
                '2020', 
                '하리보: 100년된 젊은 하리보', 
                '3세대 동안 이어진 가족기업이 2020년 12월 13일에 창립 100주년을 맞이합니다. 100년 동안 하리보 제품은 달콤한 간식과 함께 소소한 행복을 전해 드리고 있습니다. 100주년을 기념하여 매력적인 하리보의 역사를 되돌아보고 무엇보다 미래지향적인 모습으로 소비자들과 함께 "100년의 행복을 함께해요"라는 슬로건으로 축하하고 있습니다.'
            );
        }

        // ul 의 left 값 이동
        $('.historySub ul').css({ left: 880-historyIndex * 140 + 'px' });
    })

    // .historySub 의 li를 클릭하면,
    $('.historySub li').click(function () {
        let i = $(this).index();
        // .historySub 의 li img 의 속성값 src 를 가져와서
        let historyImg = $('.historySub li').eq(i).find('img').attr('src');
        console.log(historyImg);
        // .historyMain 의 img 의 속성값 src에 넣어라.
        $('.historyMain img').attr('src', historyImg);
        // 2. 텍스트 변화
        if (i == 0) {
            updateHistoryMain(
                '1922', 
                '작은 사탕가게', 
                '한스 리겔은 1893년 본 근교에 있는 프리스도르프(Friesdorf)에서 태어났습니다. 그는 제과사 교육을 이수한 후에 Heinen & Riegel 회사의 공동 소유주가 됩니다. 1920년 12월 13일, 그는 HARIBO(HAns RIegel BOnn)를 설립하고 설탕 한 자루, 석판 하나, 의자 하나, 화덕 하나, 구리 솥 하나 그리고 롤러 하나를 가지고 집 뒷마당에 딸린 작은 세탁실에서 사탕류를 생산하기 시작합니다. 1921년 그의 아내 게르트루드가 젊은 회사의 첫 번째 직원이 됩니다.'
            );
        } else if (i == 1) {
            updateHistoryMain(
                '1922', 
                '댄싱베어 출시', 
                '한스 리겔이 하리보의 성공을 위한 첫 번째 초석을 다집니다. 그는 과일젤리로 만든 곰모양의 댄싱베어(Dancing bear)를 탄생시킵니다. 이 곰은 현재의 골드베어보다 키가 크고 날씬했습니다. 두 마리의 댄싱베어는 당시 인플레이션에 시달리는 독일에서 단 1 페니에 불과했습니다.'
            );
        } else if (i == 2) {
            updateHistoryMain(
                '1923', 
                '최초의 회사 자동차', 
                '수요의 증가는 현대의 운송 수단에 대한 첫 투자를 이끌어냅니다. 하리보는 처음으로 광고 표지가 부착된 차량을 구매하여 고객에게 배송을 시작합니다. 그 이전에는 아내 게르트루드가 일일생산품을 자전거로 배달하였습니다.'
            );
        } else if (i == 3) {
            updateHistoryMain(
                '1923', 
                '리겔 가족', 
                '한스는 세 자녀 중 큰 아들로 태어났습니다. 1924년에 딸 아니타가, 1926년에는 아들 파울이 태어납니다. 한스와 파울은 1940년대 중반에 하리보 회사 경영을 인수받게 됩니다.'
            );
        } else if (i == 4) {
            updateHistoryMain(
                '1925', 
                '최초의 감초 제품 생산', 
                '하리보 성공의 두 번째 초석: 한스 리겔이 감초 제품을 생산하기 시작합니다. 하리보 로고가 새겨진 감초 스틱이 첫 번째로 큰 인기를 끌었습니다. 이어서 현재 세계적으로 유명한 감초 타이어 젤리를 비롯한 특별한 제품들이 다양하게 출시됩니다. 그리고 댄싱베어에게 블랙베어 사촌이 생겨납니다.'
            );
        } else if (i == 5) {
            updateHistoryMain(
                '1930', 
                '중기업으로 성장', 
                '영업 담당자가 이제 독일 전역에 하리보 제품을 공급합니다. 회사는 1933년에 이르러 400명의 직원으로 구성된 견고한 중기업으로 성장합니다. 동시에 본(Bonn)에 생산 시설 본관이 완공됩니다. 이때 천재적인 새로운 아이디어로 간단하면서도 기억에 남는 광고 슬로건이 탄생합니다. "하리보는 아이들을 행복하게 해줍니다". 또한 댄싱베어는 새로운 친척인 테디베어를 얻게됩니다.'
            );
        } else if (i == 6) {
            updateHistoryMain(
                '1945', 
                '역경의 시기', 
                '전쟁으로 인한 원료 부족은 경제에 악영향을 끼쳤고, 하리보 또한 그 영향을 피해갈 수 없었습니다. 1945년 창업자 한스 리겔이 52세의 나이로 사망하게 됩니다. 그의 아내 게르트루드는 2차 세계 대전이 끝난 후 초반에 그를 대신해 경영직을 인수받게 됩니다.'
            );
        } else if (i == 7) {
            updateHistoryMain(
                '1946', 
                '세대 교체', 
                '2차 세계 대전이 끝나고 겨우 30명의 직원으로 회사를 다시 재건하기 시작합니다. 1946년 한스와 파울 형제가 어머니로부터 회사 경영을 승계받습니다. 한스 리겔 박사는 마케팅 및 판매를 포함한 비즈니스 부문을 담당합니다. 동생인 파울은 생산 분야를 총괄합니다. 얼마 지나지 않아 성공적인 결실을 맺게 됩니다. 그 결과 하리보는 1950년, 전쟁이 끝난지 5년만에 1,000 여명의 직원을 채용하는 회사로 성장합니다.'
            );
        } else if (i == 8) {
            updateHistoryMain(
                '1960', 
                '골드베렌 탄생!', 
                '하리보 골드베렌 제품이 출시됩니다. 달콤한 골드베렌이 컬트 브랜드로 대성공을 얻게 되면서, 하리보는 골드베렌에게 공식 출생 증명서를 발급해 줍니다. 1967년, 골드베렌은 독일 특허청에서 공식적으로 등록상표로 인정받게 됩니다. 골드베렌은 단순한 젤리 곰 그 이상의 의미를 가지고 있습니다. 이곳에서 하리보 베스트 제품, 골드베렌에 대한 모든 것을 살펴보세요.'
            );
        } else if (i == 9) {
            updateHistoryMain(
                '1962', 
                'TV에 처음 출연한 하리보', 
                "하리보는 당시 새로운 텔레비전 매체의 중요성을 조기에 인지하였습니다. 이에 발맞춰 독일 TV에서 처음으로 하리보 광고가 방송됩니다. 1960년대 중반, '하리보는 아이들을 행복하게 해줍니다'라는 광고 슬로건에 '그리고 어른들도요'라는 문구를 추가합니다. 하리보 유튜브 채널에서 50년이 넘는 역사 속의 하리보 TV광고 내용을 확인해 보세요."
            );
        } else if (i == 10) {
            updateHistoryMain(
                '1978', 
                '새로운 모양의 골드베어', 
                '70년대에는 소비자들의 미적 감각이 변하기 시작합니다. 이에 따라 곰돌이의 모양도 달라집니다. 상대적으로 넓게 바깥쪽을 향하던 발을 좁혀 곰돌이의 모습은 지금의 작고 세련된 모양을 갖추게 됩니다.'
            );
        } else if (i == 11) {
            updateHistoryMain(
                '1986', 
                '하리보에 통합된 MAOAM', 
                '하리보가 노이스에 위치한 Edmund Münster GmbH & Co. KG 사를 인수합니다. 전통적인 MAOAM 브랜드는 이제 하리보 그룹의 일부가 됩니다. MAOAM 로고는 출시 이후 대부분 그대로 유지되어 고유한 모습을 간직하고 있습니다. MAOAM은 오래전부터 전통을 지닌 가장 유명한 상표 중 하나입니다.'
            );
        } else if (i == 12) {
            updateHistoryMain(
                '1989', 
                '골드베렌의 새로운 색상', 
                '골드베렌의 외관 변화: 이제 인기 젤리곰에 과일 및 식물 농축물이 사용되면서, 외관 색상이 약간 옅어지게 됩니다. 빨간색 나비넥타이를 맨 노란색 골드베어 그림이 표지에 처음으로 등장합니다.'
            );
        } else if (i == 13) {
            updateHistoryMain(
                '1991', 
                '하리보 모델로 등장하는 고트샬크', 
                '하리보와 당시 인기 연예인인 토마스 고트샬크(Thomas Gottschalk)간의 광고 파트너십이 시작되었고 이것은 2015년까지 이어집니다. 이 독특하고 견고한 24년간의 광고 파트너십은 기네스 북에도 올랐습니다.'
            );
        } else if (i == 14) {
            updateHistoryMain(
                '1996', 
                '마시멜로우 등장', 
                '하리보는 벨기에 제과 회사인 둘키아(Dulcia) 사를 인수합니다. 이 회사는 인기있는 마시멜로우 제품 Soft-Kiss, Coco-Balls 및 Rombiss를 수십 년 동안 생산해 왔습니다. 2007년 중반에 Dulcia라는 이름이 포장에서 사라지고 고객은 이제 슈퍼마켓에서 HARIBO Chamallows라는 이름으로 마시멜로우 제품을 찾을 수 있게 됩니다.'
            );
        } else if (i == 15) {
            updateHistoryMain(
                '2006', 
                '파울리겔에 헌정하는 본', 
                '본(Bonn) 시는 경제 도시 본을 위해 노력한 파울 리겔의 "훌륭한 공로"를 인정하여 도시 "Golden Book"에 이름을 올리며 경의를 표합니다.'
            );
        } else if (i == 16) {
            updateHistoryMain(
                '2007', 
                '85주년 하리보 골드베렌', 
                '85주년을 맞은 골드베렌이 새로운 맛과 포장 디자인 그리고 변함없는 행복한 미소를 담아 다시 탄생하게 됩니다. 그리고 여섯 번째 맛으로 “사과”가 추가됩니다. 이를 통해 소비자들에게 즐거움이 더해졌습니다. 골드베렌이 더 풍성해졌어요!'
            );
        } else if (i == 17) {
            updateHistoryMain(
                '2008', 
                '시선을 사로잡는 광고', 
                '10년이 지속된 특별한 콜래보레이션의 시작: 투이플라이 항공사의 보잉 737-800기 두 대가 독점적인 하리보 골드베어 디자인인 GoldbAIR와 2010년부터는 HaribAIR와 함께 "하늘을 나는 홍보대사"로 활동하였습니다. 2015년 5월부터는 화려한 열대과일 디자인의 비행기가 HARIBO / TUIfly 항공기에 합류하게 됩니다.'
            );
        } else if (i == 18) {
            updateHistoryMain(
                '2009', 
                '샤프트 골드베렌 탄생!', 
                '과즙이 25% 더 첨가된 샤프트 골드베렌(Saft Goldbaren)이 말랑말랑한 식감으로 출시되었습니다. 이 제품은 독일 소비자 잡지 ‘LEBENSMITTEL PRAXIS’로부터 "2009 베스트셀러” 상을 수여받았으며 식품 산업 전문 저널인 ‘Rundschau für den Lebensmittelhandel’에서 "2009 베스트셀러"로 선정되었습니다.'
            );
        } else if (i == 19) {
            updateHistoryMain(
                '2009', 
                '한스 리겔 박사 슈발리에 훈장 등급', 
                '프랑스 외무부가 한스 리겔에게 기사 즉, “슈발리에(Chevalier)”로서 최고 훈장인 "레지옹 도뇌르(Légion d’ Honneur: 명예로운 군단)를 수여하였습니다. 이것은 소수의 외국인에게만 부여된 명예였습니다. 한스 리겔 박사는 1967년 하리보 브랜드를 프랑스 시장에 출시하였습니다.'
            );
        } else if (i == 20) {
            updateHistoryMain(
                '2009', 
                '파울 리겔 83세에 사망', 
                '공동 소유자인 파울 리겔이 2009년 8월 2일에 사망합니다. 그는 생산과 기술 부분을 총괄하였습니다. 뛰어난 발명가로서 가장 유명한 제품 중 하나인 감초 타이어 젤리 와인딩 기계를 비롯하여 다양한 기계를 직접 개발했습니다. 파울 리겔은 수많은 사회 프로젝트 및 재단에 참여하면서, 그 중요성을 강조하였습니다.'
            );
        } else if (i == 21) {
            updateHistoryMain(
                '2010', 
                '하리보와 모터스포츠', 
                "1970년대부터 1990년대까지 모터스포츠에서 성공을 거둔 하리보는 만타이(Manthey) 팀과 함께 트랙으로 돌아갑니다. 이 팀은 하리보 디자인의 포르쉐 두 대로 뉘르부르크링 내구 챔피언십과 24시 내구 레이스(VLN)에서 좋은 성과를 거두었습니다. 2017년 마지막 시즌, 하리보는 메르세데스-AMG 퍼포먼스 팀으로서 '녹색 지옥(Green Hell)'의 24시 내구 레이스에서 9위를 차지했습니다."
            );
        } else if (i == 22) {
            updateHistoryMain(
                '2013', 
                '한스 리겔 박사 90세에 사망', 
                '2013년 10월 15일 한스 리겔 박사가 사망합니다. 그는 67년 동안 하리보 경영을 총괄하면서 독일에서 가장 오랜 경력을 쌓은 대표이사로 남게됩니다. 그는 하리보 뿐만 아니라 독일과 해외의 제과 산업에 큰 영향을 주었습니다. 한스 리겔 박사는 아이들과 어른들의 삶을 조금 달콤하게 만들어 주고 싶다는 소망으로 자신의 인생을 하리보에 바쳤습니다.'
            );
        } else if (i == 23) {
            updateHistoryMain(
                '2014', 
                '불리, 하리보 광고의 새로운 얼굴!', 
                '24년 후 토마스 코트샬크와의 광고 파트너십이 종료됩니다. 그는 광고 모델로서 하리보의 얼굴을 대변하는 책임을 미카엘 불리 헤르비그(Michael Bully Herbig)에 넘기면서 다음과 같이 말합니다. "불리 헤르비그가 저의 후계자가 되어서 기뻐요. 이보다 좋을 수 없죠."'
            );
        } else if (i == 24) {
            updateHistoryMain(
                '2014', 
                '새로운 본사 그라프샤프트', 
                'HARIBO GmbH & Co. KG의 주주들은 2013년 라인란트-팔츠에 위치한 그라프샤프트 지역을 새로운 본사로 결정합니다. 그 다음해에 27헥타르 규모의 부지를 인수하였고, 이곳은 이상적인 교통망과 대형 물류 센터를 위한 공간, 3단계에 걸친 최첨단 생산 라인 및 현대적인 관리 건물을 갖추게 됩니다.'
            );
        } else if (i == 25) {
            updateHistoryMain(
                '2018', 
                '대규모 이전', 
                '5월 2일, 직원들은 새로운 독일 본사이자 하리보 그룹의 국제본사인 그라프샤프트에서 첫 업무를 시작합니다. 한스 귀도 리겔: "우리와 하리보를 위한 큰 도약이자 회사 역사의 또 다른 중요한 이정표입니다.”라며 다음과 같이 덧붙입니다. "본은 영원히 하리보의 일부로 남아 있을 것입니다.”'
            );
        } else if (i == 26) {
            updateHistoryMain(
                '2020', 
                '하리보: 100년된 젊은 하리보', 
                '3세대 동안 이어진 가족기업이 2020년 12월 13일에 창립 100주년을 맞이합니다. 100년 동안 하리보 제품은 달콤한 간식과 함께 소소한 행복을 전해 드리고 있습니다. 100주년을 기념하여 매력적인 하리보의 역사를 되돌아보고 무엇보다 미래지향적인 모습으로 소비자들과 함께 "100년의 행복을 함께해요"라는 슬로건으로 축하하고 있습니다.'
            );
        }
        // 3. ul 의 left 값 변화
        $('.historySub ul').css({ left: 880-i * 140 + 'px' });
        // 4. 변수 historyIndex 에 i 값을 넣어라
        historyIndex = i;
    });
    // 처음으로 버튼 클릭시, .historySub ul 의 left 값 1번 li의 위치로 이동
    $('.main_section4 .first').click(function () {
        $('.historySub ul').css({ left: '880px' });
        // historyIndex 0으로 초기화
        historyIndex = 0;
        // .historyMain 의 img 의 속성값 src에 넣어라.
        $('.historyMain img').attr('src', 'img/section4_historySub1.png');
        // 내용 변경
        updateHistoryMain(
            '1922', 
            '작은 사탕가게', 
            '한스 리겔은 1893년 본 근교에 있는 프리스도르프(Friesdorf)에서 태어났습니다. 그는 제과사 교육을 이수한 후에 Heinen & Riegel 회사의 공동 소유주가 됩니다. 1920년 12월 13일, 그는 HARIBO(HAns RIegel BOnn)를 설립하고 설탕 한 자루, 석판 하나, 의자 하나, 화덕 하나, 구리 솥 하나 그리고 롤러 하나를 가지고 집 뒷마당에 딸린 작은 세탁실에서 사탕류를 생산하기 시작합니다. 1921년 그의 아내 게르트루드가 젊은 회사의 첫 번째 직원이 됩니다.'
        );
    })
    // 끝으로 버튼 클릭시, .historySub ul 의 left 값 27번 li의 위치로 이동
    $('.main_section4 .last').click(function () {
        $('.historySub ul').css({ left: '-2760px' });
        // historyIndex 26으로 설정
        historyIndex = 26;
        // .historyMain 의 img 의 속성값 src에 넣어라.
        $('.historyMain img').attr('src', 'img/section4_historySub27.png');
        // 내용 변경
        updateHistoryMain(
            '2020', 
            '하리보: 100년된 젊은 하리보', 
            '3세대 동안 이어진 가족기업이 2020년 12월 13일에 창립 100주년을 맞이합니다. 100년 동안 하리보 제품은 달콤한 간식과 함께 소소한 행복을 전해 드리고 있습니다. 100주년을 기념하여 매력적인 하리보의 역사를 되돌아보고 무엇보다 미래지향적인 모습으로 소비자들과 함께 "100년의 행복을 함께해요"라는 슬로건으로 축하하고 있습니다.'
        );
    })

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

    // sub_section1 .detail_content 의 .btn 의 .minus 를 클릭할 때 , input 의 숫자가 줄고
    $('.sub_section1 .detail_content .minus').click(function () {
        // input 의 숫자가 1보다 크면, input 의 숫자를 1씩 줄여라
        let num = $('.btn input').val();
        if (num > 1) {
            num--;
            $('.btn input').val(num);
        }
        // sub_section1 의 .total_price 의 span 에 num 변수를 곱해라
        let price1 = 1500;
        let totalPrice1 = price1 * num;
        let commaPrice1 = totalPrice1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        $('.sub_section1 .total_price span').text(commaPrice1+'원');

        

    });
    // sub_section1 .detail_content 의 .btn 의 .plus 를 클릭할 때 , input 의 숫자가 늘어남
    $('.sub_section1 .detail_content .plus').click(function () {
        // input 의 숫자를 1씩 늘려라
        let num = $('.btn input').val();
        num++;
        $('.btn input').val(num);
        // sub_section1 의 .total_price 의 span 에 num 변수를 곱해라
        let price2 = 1500;
        let totalPrice2 = price2 * num;
        let commaPrice2 = totalPrice2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        $('.sub_section1 .total_price span').text(commaPrice2+'원');
    });

    // sub_section2 의 이런상품은 어때요? 좌우 버튼에 따라 리스트 이동
    $('.sub_section2 .listBox .btn.right').click(function(){
        $('.sub_section2 .listBox ul').animate({left: '-480px'}, 500);
    })
    $('.sub_section2 .listBox .btn.left').click(function(){
        $('.sub_section2 .listBox ul').animate({left: 0}, 500);
    })

    // sub_section2 의 스크롤에 반응하여 등장하는 애니메이션
    // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
    const $counters = $(".scroll_on");
    
    // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).scroll(function() {
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





});

