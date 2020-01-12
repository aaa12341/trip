const Header = document.querySelector('header');
function getQueryString(){
    //Get QueryString
    params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    console.log(params)
    return params;
   }
function HeaderRender(A){
    if(A == "index"){
        Text = "어디로 떠나세요?"
        console.log(Text)
    }
    // else if(A == "ticket"){
    //     Text = "투어티켓"
    // }
    else if(A == "airplan"){
        Text = "항공권"
    }
    else if(A == "home"){
        Text = "숙소"
    }
    else if(A == "a2"){
        Text = "특가여행"
    }else if(A == "a3"){
        Text = "패키지"
    }else if(A == "a4"){
        Text = "여행자보험"
    }else if(A == "a5"){
        Text = "여행준비"
    }
    
Header.innerHTML = ` 
    <div class="section_box">
        <div class="boxs">
            <div class="wrap">
                <div class="box1">
                    <a href="index.html">
                        <h1><img src="img/logo.png" alt="로고"></h1>
                    </a>
                    <ul>
                        <li>파트너 등록하기</li>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                    <div class="hams">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div class="box2">
                    <ul>
                        <li class="nav_list"><a href="index.html?id=ticket&pageno=0">투어&티켓</a></li>
                        <li class="nav_list"><a href="second.html">항공권</a></li>
                        <li class="nav_list"><a href="main.html?id=home&pageno=2">숙소</a></li>
                        <li class="nav_list"><a href="main.html?id=a2&pageno=3">특가여행</a></li>
                        <li class="nav_list"><a href="main.html?id=a3&pageno=4">패키지</a></li>
                        <li class="nav_list"><a href="main.html?id=a4&pageno=5">여행자보험</a></li>
                        <li class="nav_list"><a href="main.html?id=a5&pageno=6">여행준비</a></li>

                        <!-- <li class="nav_list"><a href="index.html?id=ticket&pageno=0">투어&티켓</a></li>
                        <li class="nav_list"><a href="main.html?id=airplan&pageno=1">항공권</a></li>
                        <li class="nav_list"><a href="main.html?id=home&pageno=2">숙소</a></li>
                        <li class="nav_list"><a href="main.html?id=a2&pageno=3">특가여행</a></li>
                        <li class="nav_list"><a href="main.html?id=a3&pageno=4">패키지</a></li>
                        <li class="nav_list"><a href="main.html?id=a4&pageno=5">여행자보험</a></li>
                        <li class="nav_list"><a href="main.html?id=a5&pageno=6">여행준비</a></li> -->
                    </ul>
                </div>
            </div>
        </div>
        <div class="middle_box">
            <div class="wrap">
                <h2>${Text}</h2>
                <div class="box3">
                    <input type="text" placeholder="여행지나 상품을 검색해보세요!">
                </div>
            </div>
        </div>
    </div>`
    }
    function ActiveList(A){
        const NavList = document.querySelectorAll('.nav_list');
        console.log(NavList);
        NavList[A].className='active'
    }
