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

        requestAnimationFrame(moveDVD);
    }

    moveDVD();

    // section1 의 gsap timeline 애니메이션 효과
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    // .dvd-logo 에서 클릭하면 애니메이션 발동
    $('.section1 .dvd-logo').click(function () {
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
        tl1.to('.section1 nav',  {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut'
        })
        // nav 앞으로 가져오기
        $('.section1 nav').css('z-index', '2');
        // 선택받은 nav 요소에 on 클래스 붙여서 텍스트 파랗게 변하기
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

    // nav 의 home 클릭하면 홈으로 넘어가는 애니메이션
    $('nav ul li').eq(0).click(function () {
        // nav
        tl1.to('.section1 nav',  {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
        // nav 뒤로 보내기
        $('.section1 nav').css('z-index', '-1');

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
        
        // .txt 요소 차례대로 등장하도록 애니메이션
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
        
    
    
});