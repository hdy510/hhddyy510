$(document).ready(function() {
    // intro dvd 움직임 효과
    const dvdContainer = $('.dvd-container');
    const dvdLogo = $('.dvd-logo');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const logoWidth = dvdContainer.width();
    const logoHeight = dvdContainer.height();

    let posX = Math.random() * (containerWidth - logoWidth);
    let posY = Math.random() * (containerHeight - logoHeight);
    let velocityX = 2;
    let velocityY = 2;

    function moveDVD() {
        posX += velocityX;
        posY += velocityY;

        if (posX + logoWidth >= containerWidth || posX <= 0) {
            velocityX *= -1;
        }

        if (posY + logoHeight >= containerHeight || posY <= 0) {
            velocityY *= -1;
        }

        dvdContainer.css({
            left: `${posX}px`,
            top: `${posY}px`
        });

        // requestAnimationFrame(moveDVD);
        animationFrameId = requestAnimationFrame(moveDVD);
    }
    moveDVD();

    // moveDVD 함수를 멈추기 위한 코드
    function stopDVD() {
        cancelAnimationFrame(animationFrameId);
    }

    // section1 의 gsap timeline 애니메이션 효과
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    // .dvd-logo 에서 클릭하면 애니메이션 발동
    $('.section1 .dvd-logo').click(function () {
        // dvd 멈추기
        stopDVD();
        // 배경
        tl1.fromTo('.section1 .bg', {
            duration: 1,
            width: '0px',
            height: '0px',
            backgroundColor: '#00007b',
            ease: 'power2.inOut'
        }, {
            duration: 1,
            width: '2px',
            height: '100vh',
            backgroundColor: '#00007b',
            ease: 'power2.inOut'
        });
        tl1.to('.section1 .bg', {
            duration: 1,
            width: '100%',
            height: '100vh',
            backgroundColor: '#00007b',
            ease: 'power2.inOut'
        })
        // .section1 .black_bg 앞으로 가져오고 투명도 증가
        $('.section1 .black_bg').css('z-index', '2');
        $('.section1 .black_bg').css('opacity', '1');

        // .mainTitle의 span h1 과 p요소 차례대로 등장하도록 애니메이션
        tl1.fromTo('.section1 .mainTitle h1', {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out'
        });
        tl1.fromTo('.section1 .mainTitle p', {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out'
        });
        // .txt 요소 차례대로 등장하도록 애니메이션
        tl2.fromTo('.section1 .txt', {
            opacity: 0,
            y: 20
        }, {
            delay: 2.2,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        // .btn 요소 차례대로 등장하도록 애니메이션
        tl2.fromTo('.section1 .btn', {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        // .eachBox 요소의 .haribo와 .kaps와 .newjeans 차례대로 등장하도록 애니메이션
        gsap.fromTo('.section1 .eachBox.haribo', {
            opacity: 0,
            y: -20
        }, {
            delay: 2.7,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.kaps', {
            opacity: 0,
            y: -20
        }, {
            delay: 2.9,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.newjeans', {
            opacity: 0,
            y: -20
        }, {
            delay: 3.1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    })
    
    // .section1 .btn.profile 클릭하면 프로필로 넘어가는 애니메이션
    $('.section1 .btn.profile').click(function () {
        // 배경
        tl1.to('.section1 .bg', {
            duration: 1,
            width: '20px',
            height: '100vh',
            backgroundColor: '#00007b',
            ease: 'power2.inOut'
        })
        tl1.to('.section1 .bg', {
            duration: 0.8,
            translateX: -680,
            ease: 'power2.inOut'
        })
        tl2.to('.section1 .mainTitle h1', {
            duration: 1,
            opacity: 0,
            ease: 'power2.inOut'
        });
        tl2.to('.section1 .mainTitle p', {
            duration: 0.8,
            translateY: -210,
            ease: 'power2.inOut'
        });
        
        // .profileContent 앞으로 가져오고 투명도 증가
        $('.section1 .profileContent').css('z-index', '2');
        $('.section1 .profileContent').css('opacity', '1');
        tl2.fromTo('.section1 .firstLi', {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });
        // nav 앞으로 가져오기
        tl1.to('.section1 nav',  {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut'
        })
        $('.section1 nav').css('z-index', '2');
        // nav 의 profile 요소에 on 클래스 붙여서 텍스트 파랗게 변하기
        $('.section1 nav li').removeClass('on');
        $('.section1 nav li').eq(1).addClass('on');
        // 1초 후에 .btn.profile 없애기
        setTimeout(function () {
            $('.section1 .btn.profile').css('display', 'none');
        }, 1000);
        // .btn.profile 과 .eachBox 요소의 .haribo와 .kaps와 .newjeans 차례대로 사라지도록 애니메이션
        gsap.to('.section1 .btn.profile',  {
            opacity: 0,
            y: -40,
            duration: 1,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.haribo', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.kaps', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            delay: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.newjeans', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            delay: 0.2,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.to('.section1 .txt.welcome',  {
            opacity: 0,
            y: -20,
            delay: 0.3,
            duration: 0.2,
            ease: 'power2.out'
        });
        
        // 프로그레스 바
        setTimeout(function () {
            $('.section1 .canvas').each(function() { 
                // 퍼센트를 표시할 요소 선택
                const spanpercent = $(this).siblings('.section1 .percent');
                
                // 원의 테두리 너비(px) 및 애니메이션 지속 시간(ms) 정의 
                const border = 7;
                const duration = 1000; 
            
                // 캔버스 및 2D 컨텍스트 설정
                const canvas = $(this)[0]; 
                const ctx = canvas.getContext('2d');
            
                // 애니메이션에 필요한 변수 및 데이터 속성에서 목표 퍼센트 가져오기
                const targetPercent = $(this).data('percent');
                const posX = canvas.width / 2;
                const posY = canvas.height / 2;
                const onePercent = 360 / 100;
                const result = onePercent * targetPercent;
                const radius = (canvas.width / 2) - (border / 2);
                let percent = 0;
                ctx.lineCap = (targetPercent <= 0) ? 'butt' : 'round';
            
                // 원을 그리고 퍼센트 업데이트하는 함수
                function arcMove() {
                    let degrees = 0;
                    let startTime = null;
            
                    // 애니메이션을 처리하는 함수
                    function animate(timestamp) {
                        if (!startTime) startTime = timestamp;
                        let progress = (timestamp - startTime) / duration;
                        progress = Math.min(1, progress);
                        degrees = progress * result;
            
                        // 캔버스 초기화 및 퍼센트 업데이트
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        percent = Math.floor(degrees / onePercent);
                        spanpercent.text(percent);
            
                        // 배경 선 그리기
                        // ctx.beginPath();
                        // ctx.arc(posX, posY, radius, 0, Math.PI * 2);
                        // ctx.strokeStyle = '#fff';
                        // ctx.lineWidth = border;
                        // ctx.stroke();
            
                        // 애니메이션 되는 선 그리기
                        ctx.beginPath();
                        ctx.strokeStyle = '#0000d2';
                        ctx.lineWidth = border;
                        ctx.arc(posX, posY, radius, Math.PI * -0.5, (Math.PI / 180) * degrees - (Math.PI / 2));
                        ctx.stroke();
            
                        // 애니메이션이 완료되지 않았다면 계속해서 프레임 요청
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }
                    // 첫 프레임 요청
                    requestAnimationFrame(animate);
                }
            
                // 애니메이션 함수 호출
                arcMove();
            });
        }, 2000);
        

    })

    // .section1 .contentBox의 eachBox 를 클릭하면 각각의 페이지로 넘어가는 애니메이션
    $('.section1 .contentBox .eachBox').click(function () {
        // 배경
        gsap.to('.section1 .bg', {
            duration: 1,
            width: '20px',
            height: '100vh',
            backgroundColor: '#00007b',
            ease: 'power2.inOut'
        })
        gsap.to('.section1 .bg', {
            duration: 1,
            translateX: -680,
            ease: 'power2.inOut'
        })
        gsap.to('.section1 .mainTitle h1', {
            duration: 1,
            opacity: 0,
            ease: 'power2.inOut'
        });
        gsap.to('.section1 .mainTitle p', {
            duration: 1,
            opacity: 0,
            ease: 'power2.inOut'
        });
        // .btn.profile 없애기
        // 1초 후에 .btn.profile 없애기
        setTimeout(function () {
            $('.section1 .btn.profile').css('display', 'none');
        }, 1000);
        // .btn.profile 과 .eachBox 요소의 .haribo와 .kaps와 .newjeans 차례대로 사라지도록 애니메이션
        gsap.to('.section1 .btn.profile',  {
            opacity: 0,
            y: -40,
            duration: 1,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.haribo', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.kaps', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            delay: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.newjeans', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            delay: 0.2,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.to('.section1 .txt.welcome',  {
            opacity: 0,
            y: -20,
            delay: 0.3,
            duration: 0.2,
            ease: 'power2.out'
        });

        // nav 앞으로 가져오기
        tl1.to('.section1 nav',  {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut'
        })
        $('.section1 nav').css('z-index', '2');
        // nav 의 profile 요소에 on 클래스 붙여서 텍스트 파랗게 변하기
        $('.section1 nav li').removeClass('on');
        if ($(this).hasClass('haribo')) {
            $('.section1 nav li').eq(2).addClass('on');
        } else if ($(this).hasClass('kaps')) {
            $('.section1 nav li').eq(3).addClass('on');
        } else if ($(this).hasClass('newjeans')) {
            $('.section1 nav li').eq(4).addClass('on');
        }
        
        // 나타나기##############################################
        // 하리보, kaps, 뉴진스에 해당하는 컨텐츠 보여주기
        let index = $(this).index();
        let index2 = 'index' + index;
        if ($('.section1 article').hasClass(index2)) {
            setTimeout(function () {
                $('.section1 article.' + index2).css('display', 'block');
            }, 500);

            tl1.fromTo('.section1 article.' + index2 + ' .imgBox', {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
            tl2.fromTo('.section1 article.' + index2 + ' .portfolioBtn span', {
                opacity: 0,
                y: -20
            }, {
                delay: 1.2,
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: 0.2,
                ease: 'power2.out'
            });
        };
    });

    // <.eachBox 사라지게 하는 작업>
    // 1. nav 클릭시 공통사항 일괄 설정
    // home 을 제외한 모든 li 클릭시 .section1 .contentBox .eachBox 가 display none
    $('nav ul li').click(function () {
        $('.section1 .contentBox .eachBox').css('display', 'none');
    })
    $('nav ul li').eq(0).click(function () {
        setTimeout(function () {
            $('.section1 .contentBox .eachBox').css('display', 'block');
        }, 2500);
    })
    // 2. .btn.profile 클릭시
    $('.section1 .btn.profile').click(function () {
        setTimeout(function () {
            $('.section1 .contentBox .eachBox').css('display', 'none');
        }, 1000);
        
    })
    // 3. .eachBox 클릭시
    $('.section1 .contentBox .eachBox').click(function () {
        setTimeout(function () {
            $('.section1 .contentBox .eachBox').css('display', 'none');
        }, 1000);
    })
    // 4. 인트로의 .dvd-logo 클릭시
    $('.section1 .dvd-logo').click(function () {
        setTimeout(function () {
            $('.section1 .contentBox .eachBox').css('display', 'block');
        }, 2000);
    })

    // nav 의 home 클릭시
    $('nav ul li').eq(0).click(function () {
        // nav 의 home 요소에 on 클래스 붙여서 텍스트 파랗게 변하기
        $('.section1 nav li').removeClass('on');
        $('.section1 nav li').eq(0).addClass('on');

        // 없어지기##########################################
        // nav 뒤로 보내기
        tl1.to('.section1 nav',  {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
        $('.section1 nav').css('z-index', '-1');
        // profileContent 사라지기
        tl2.fromTo('.section1 .firstLi', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });
        // 1초 후에 .profileContent 뒤로 보내고 투명도 감소
        setTimeout(function () {
            $('.section1 .profileContent').css('z-index', '-1');
            $('.section1 .profileContent').css('opacity', '0');
        }, 1000);
        // article (포트폴리오 컨텐츠) 사라지기
        setTimeout(function () {
            $('.section1 article').css('display', 'none');
        }, 1500);
        tl3.fromTo('.section1 article .imgBox', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 article .portfolioBtn span', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: 'power2.out'
        });

        // 배경
        // 버전1
        // tl1.to('.section1 .bg', {
        //     duration: 1,
        //     width: '20px',
        //     height: '100vh',
        //     backgroundColor: '#00007b',
        //     ease: 'power2.inOut'
        // })
        // tl1.to('.section1 .bg', {
        //     duration: 0.8,
        //     translateX: 0,
        //     ease: 'power2.inOut'
        // })
        // tl2.to('.section1 .mainTitle h1', {
        //     duration: 0.5,
        //     opacity: 1,
        //     ease: 'power2.inOut'
        // });
        // tl2.to('.section1 .mainTitle p', {
        //     duration: 0.8,
        //     translateY: 0,
        //     ease: 'power2.inOut'
        // });
        // tl1.to('.section1 .bg', {
        //     duration: 1,
        //     width: '100%',
        //     height: '100vh',
        //     backgroundColor: '#00007b',
        //     ease: 'power2.inOut'
        // });
        
        // 버전2
        tl2.to('.section1 .mainTitle p', {
            duration: 0.8,
            translateY: 0,
            ease: 'power2.inOut'
        });
        tl2.to('.section1 .mainTitle h1', {
            duration: 1,
            opacity: 1,
            ease: 'power2.inOut'
        });
        tl1.to('.section1 .bg', {
            duration: 0.8,
            translateX: 0,
            ease: 'power2.inOut'
        });
        tl1.to('.section1 .bg', {
            duration: 1,
            width: '100%',
            height: '100vh',
            backgroundColor: '#00007b',
            ease: 'power2.inOut'
        });
        
        // 나타나기##############################################
        // .txt 요소 차례대로 등장하도록 애니메이션
        gsap.to('.section1 .mainTitle p', {
            duration: 1,
            opacity: 1,
            ease: 'power2.inOut'
        });
        tl1.fromTo('.section1 .txt', {
            opacity: 0,
            y: 20
        }, {
            delay: 0.2,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        // .btn 요소 차례대로 등장하도록 애니메이션
        setTimeout(function () {
            $('.section1 .btn.profile').css('display', 'block');
        }, 1000);
        tl2.fromTo('.section1 .btn', {
            opacity: 0,
            y: 20
        }, {
            delay: 0.2,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        // .eachBox 요소의 .haribo와 .kaps와 .newjeans 차례대로 등장하도록 애니메이션
        gsap.fromTo('.section1 .eachBox.haribo', {
            opacity: 0,
            y: -20
        }, {
            delay: 2.7,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.kaps', {
            opacity: 0,
            y: -20
        }, {
            delay: 2.9,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.newjeans', {
            opacity: 0,
            y: -20
        }, {
            delay: 3.1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    })
    
    // nav 의 profile 클릭시
    $('nav ul li').eq(1).click(function () {
        // nav 의 profile 요소에 on 클래스 붙여서 텍스트 파랗게 변하기
        $('.section1 nav li').removeClass('on');
        $('.section1 nav li').eq(1).addClass('on');
        // 없어지기##########################################
        // article (포트폴리오 컨텐츠) 사라지기
        setTimeout(function () {
            $('.section1 article').css('display', 'none');
        }, 1500);
        tl3.fromTo('.section1 article .imgBox', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 article .portfolioBtn span', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: 'power2.out'
        });

        // 나타나기##############################################
        // 이름 가져오기
        gsap.fromTo('.section1 .mainTitle p', {
            opacity: 0,
            translateY: -250,
        }, {
            duration: 1,
            opacity: 1,
            translateY: -210,
            ease: 'power2.inOut'
        });
        // .profileContent 앞으로 가져오고 투명도 증가
        $('.section1 .profileContent').css('z-index', '2');
        $('.section1 .profileContent').css('opacity', '1');
        tl2.fromTo('.section1 .firstLi', {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });

        // 프로그레스 바
        setTimeout(function () {
            $('.section1 .canvas').each(function() { 
                // 퍼센트를 표시할 요소 선택
                const spanpercent = $(this).siblings('.section1 .percent');
                
                // 원의 테두리 너비(px) 및 애니메이션 지속 시간(ms) 정의 
                const border = 7;
                const duration = 1000; 
            
                // 캔버스 및 2D 컨텍스트 설정
                const canvas = $(this)[0]; 
                const ctx = canvas.getContext('2d');
            
                // 애니메이션에 필요한 변수 및 데이터 속성에서 목표 퍼센트 가져오기
                const targetPercent = $(this).data('percent');
                const posX = canvas.width / 2;
                const posY = canvas.height / 2;
                const onePercent = 360 / 100;
                const result = onePercent * targetPercent;
                const radius = (canvas.width / 2) - (border / 2);
                let percent = 0;
                ctx.lineCap = (targetPercent <= 0) ? 'butt' : 'round';
            
                // 원을 그리고 퍼센트 업데이트하는 함수
                function arcMove() {
                    let degrees = 0;
                    let startTime = null;
            
                    // 애니메이션을 처리하는 함수
                    function animate(timestamp) {
                        if (!startTime) startTime = timestamp;
                        let progress = (timestamp - startTime) / duration;
                        progress = Math.min(1, progress);
                        degrees = progress * result;
            
                        // 캔버스 초기화 및 퍼센트 업데이트
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        percent = Math.floor(degrees / onePercent);
                        spanpercent.text(percent);
            
                        // 배경 선 그리기
                        // ctx.beginPath();
                        // ctx.arc(posX, posY, radius, 0, Math.PI * 2);
                        // ctx.strokeStyle = '#fff';
                        // ctx.lineWidth = border;
                        // ctx.stroke();
            
                        // 애니메이션 되는 선 그리기
                        ctx.beginPath();
                        ctx.strokeStyle = '#0000d2';
                        ctx.lineWidth = border;
                        ctx.arc(posX, posY, radius, Math.PI * -0.5, (Math.PI / 180) * degrees - (Math.PI / 2));
                        ctx.stroke();
            
                        // 애니메이션이 완료되지 않았다면 계속해서 프레임 요청
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }
                    // 첫 프레임 요청
                    requestAnimationFrame(animate);
                }
            
                // 애니메이션 함수 호출
                arcMove();
            });
        }, 500);
    })

    // nav 의 haribo 클릭시
    $('nav ul li').eq(2).click(function () {
        // nav 의 home 요소에 on 클래스 붙여서 텍스트 파랗게 변하기
        $('.section1 nav li').removeClass('on');
        $('.section1 nav li').eq(2).addClass('on');

        // 없어지기##########################################
        // 이름 없어지기
        gsap.to('.section1 .mainTitle p', {
            duration: 0.5,
            opacity: 0,
            translateY: -250,
            ease: 'power2.inOut'
        });
        // profileContent 사라지기
        tl2.fromTo('.section1 .firstLi', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });
        // 1초 후에 .profileContent 뒤로 보내고 투명도 감소
        setTimeout(function () {
            $('.section1 .profileContent').css('z-index', '-1');
            $('.section1 .profileContent').css('opacity', '0');
        }, 1000);
        // article (포트폴리오 컨텐츠) 사라지기
        tl3.fromTo('.section1 article .imgBox', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 article .portfolioBtn span', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: 'power2.out'
        });
        // 해당 포트폴리오 제외 나머지 포트폴리오 사라지기
        setTimeout(function () {
            $('.section1 article.index1').css('display', 'none');
            $('.section1 article.index2').css('display', 'none');
        }, 700);

        // 나타나기##############################################
        setTimeout(function () {
            $('.section1 article.index0').css('display', 'block');
        }, 700);

        tl1.fromTo('.section1 article.index0 .imgBox', {
            opacity: 0,
            y: -20
        }, {
            delay: 0.7,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        tl2.fromTo('.section1 article.index0 .portfolioBtn span', {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.2,
            ease: 'power2.out'
        });
    });

    // nav 의 kaps 클릭시
    $('nav ul li').eq(3).click(function () {
        // nav 의 home 요소에 on 클래스 붙여서 텍스트 파랗게 변하기
        $('.section1 nav li').removeClass('on');
        $('.section1 nav li').eq(3).addClass('on');

        // 없어지기##########################################
        // 이름 없어지기
        gsap.to('.section1 .mainTitle p', {
            duration: 0.5,
            opacity: 0,
            translateY: -250,
            ease: 'power2.inOut'
        });
        // profileContent 사라지기
        tl2.fromTo('.section1 .firstLi', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });
        // 1초 후에 .profileContent 뒤로 보내고 투명도 감소
        setTimeout(function () {
            $('.section1 .profileContent').css('z-index', '-1');
            $('.section1 .profileContent').css('opacity', '0');
        }, 1000);
        // article (포트폴리오 컨텐츠) 사라지기
        tl3.fromTo('.section1 article .imgBox', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 article .portfolioBtn span', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: 'power2.out'
        });
        // 해당 포트폴리오 제외 나머지 포트폴리오 사라지기
        setTimeout(function () {
            $('.section1 article.index0').css('display', 'none');
            $('.section1 article.index2').css('display', 'none');
        }, 700);

        // 나타나기##############################################
        setTimeout(function () {
            $('.section1 article.index1').css('display', 'block');
        }, 700);

        tl1.fromTo('.section1 article.index1 .imgBox', {
            opacity: 0,
            y: -20
        }, {
            delay: 0.7,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        tl2.fromTo('.section1 article.index1 .portfolioBtn span', {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.2,
            ease: 'power2.out'
        });
    });

    // nav 의 newjeans 클릭시
    $('nav ul li').eq(4).click(function () {
        // nav 의 home 요소에 on 클래스 붙여서 텍스트 파랗게 변하기
        $('.section1 nav li').removeClass('on');
        $('.section1 nav li').eq(4).addClass('on');

        // 없어지기##########################################
        // 이름 없어지기
        gsap.to('.section1 .mainTitle p', {
            duration: 0.5,
            opacity: 0,
            translateY: -250,
            ease: 'power2.inOut'
        });
        // profileContent 사라지기
        tl2.fromTo('.section1 .firstLi', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });
        // 1초 후에 .profileContent 뒤로 보내고 투명도 감소
        setTimeout(function () {
            $('.section1 .profileContent').css('z-index', '-1');
            $('.section1 .profileContent').css('opacity', '0');
        }, 1000);
        // article (포트폴리오 컨텐츠) 사라지기
        tl3.fromTo('.section1 article .imgBox', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 article .portfolioBtn span', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: 'power2.out'
        });
        // 해당 포트폴리오 제외 나머지 포트폴리오 사라지기
        setTimeout(function () {
            $('.section1 article.index0').css('display', 'none');
            $('.section1 article.index1').css('display', 'none');
        }, 700);

        // 나타나기##############################################
        setTimeout(function () {
            $('.section1 article.index2').css('display', 'block');
        }, 700);

        tl1.fromTo('.section1 article.index2 .imgBox', {
            opacity: 0,
            y: -20
        }, {
            delay: 0.7,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        tl2.fromTo('.section1 article.index2 .portfolioBtn span', {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.2,
            ease: 'power2.out'
        });
    });

    // 우측 하단 dvd 아이콘 클릭시 인트로 페이지로 이동
    $('.section1 .btn.toIntro').click(function () {
        // dvd 움직이기
        moveDVD();
        // 배경
        tl1.fromTo('.section1 .bg', {
            width: '100%',
            height: '100vh',
            backgroundColor: '#00007b',
        }, {
            duration: 1,
            width: '2px',
            height: '100vh',
            backgroundColor: '#00007b',
            ease: 'power2.inOut'
        })
        tl1.to('.section1 .bg', {
            duration: 1,
            width: '0px',
            height: '0px',
            backgroundColor: '#00007b',
            ease: 'power2.inOut'
        });
        // 제목 없어지기
        tl2.to('.section1 .mainTitle h1', {
            duration: 1,
            opacity: 0,
            ease: 'power2.inOut'
        });
        // .txt 요소 없어지기
        gsap.fromTo('.section1 .txt', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            stagger: 0.2,
            duration: 0.5,
            ease: 'power2.out'
        });
        // 우측 하단 .btn.toIntro 없애기 
        tl3.fromTo('.section1 .btn.toIntro', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power2.out'
        });
        // 이름 없어지기
        gsap.to('.section1 .mainTitle p', {
            duration: 0.5,
            opacity: 0,
            translateY: -250,
            ease: 'power2.inOut'
        });
        // .btn.profile 과 .eachBox 요소의 .haribo와 .kaps와 .newjeans 차례대로 사라지도록 애니메이션
        gsap.to('.section1 .btn.profile',  {
            opacity: 0,
            y: -40,
            duration: 1,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.haribo', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.kaps', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            delay: 0.1,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.fromTo('.section1 .eachBox.newjeans', {
            opacity: 1,
            y: 0
        }, {
            opacity: 0,
            y: -20,
            delay: 0.2,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.to('.section1 .txt.welcome',  {
            opacity: 0,
            y: -20,
            delay: 0.3,
            duration: 0.2,
            ease: 'power2.out'
        });
        

        // black_bg 뒤로 보내서 움직이는 dvd-logo 보이게 하기
        setTimeout(function () {
            $('.section1 .black_bg').css('z-index', '-1');
            $('.section1 .black_bg').css('opacity', '0');
        }
        , 1900);
    });

    
});