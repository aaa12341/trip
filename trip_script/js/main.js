const Header = document.querySelector('header');
const Footer = document.querySelector('footer');

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
    else if(A == "airplane"){
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
                            <li class="nav_list"><a href="airplane.html">항공권</a></li>
                            <li class="nav_list"><a href="home.html">숙소</a></li>
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

function FooterRender(){
    Footer.innerHTML = ` 
        <div class="foot">
            <div class="wrap">
                <div class="section1">
                    <div class="box1">
                        <h3>고객센터</h3>
                        <h2>1670-8208</h2>
                        <p class="time1">일반 문의 09:00-22:00 / 실시간 항공권 문의 09:00-18:00</p>
                        <p class="time2">연중무휴 / 점심 12:00-13:00</p>
                        <div class="tel_btn">1:1 채팅상담</div>
                    </div>
                    <div class="box2">
                        <h3>소개</h3>
                        <p class="list">회사소개</p>
                        <p class="list">채용</p>
                    </div>
                    <div class="box3">
                        <h3>파트너</h3>
                        <p class="list">파트너 등록하기</p>
                        <p class="list">Affiliate 프로그램</p>
                        <p class="list">리얼가이드</p>
                        <p class="list">가이드 블로그</p>
                    </div>
                    <div class="box4">
                        <h3>지원</h3>
                        <p class="list">자주 묻는 질문</p>
                        <p class="list">최저가 보장제</p>
                    </div>
                </div>
                <div class="section2">
                    <div class="box1">
                        <div class="policy">
                            <ul>
                                <li>이용 약관</li>
                                <li>개인정보 처리방침</li>
                                <li>취소 및 환불 정책</li>
                            </ul>
                        </div>
                        <div class="sns">
                            <ul>
                                <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNBREI1QkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5IDRjMC0xLjU3Ni0xLjQyMy0zLTMtM0g0QzIuNDIzIDEgMSAyLjQyNCAxIDR2MTJjMCAxLjU3NiAxLjQyMyAzIDMgM2g2di02LjhINy44di0zSDEwVjguMDMxQzEwIDYuMDE1IDExLjUxNCA0LjIgMTMuMzc1IDQuMkgxNS44djNoLTIuNDI1Yy0uMjY1IDAtLjU3NS4zMjItLjU3NS44MDVWOS4yaDN2M2gtM1YxOUgxNmMxLjU3NyAwIDMtMS40MjQgMy0zVjR6Ii8+Cjwvc3ZnPgo=" alt=""></li>
                                <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNBREI1QkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMWgxNGEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yVjNhMiAyIDAgMCAxIDItMnptMTEuMzk2IDQuNWgtMi42MDV2NC44Mkw3LjYzMyA1LjVINS41djkuMDQ1aDIuNTkyVjkuODg3bDQuMTU4IDQuNjU4aDIuMTQ2VjUuNXoiLz4KPC9zdmc+Cg==" alt=""></li>
                                <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9IiNBREI1QkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTE3LjMxMyAxMy45NmEzLjM1NSAzLjM1NSAwIDAgMS0zLjM1MiAzLjM1Mkg1Ljk0YTMuMzU1IDMuMzU1IDAgMCAxLTMuMzUyLTMuMzUxVjUuOTRBMy4zNTUgMy4zNTUgMCAwIDEgNS45NCAyLjU4OGg4LjAyYTMuMzU2IDMuMzU2IDAgMCAxIDMuMzUyIDMuMzUydjguMDJ6TTEzLjk2IDFINS45NEE0Ljk0NiA0Ljk0NiAwIDAgMCAxIDUuOTR2OC4wMmE0Ljk0NSA0Ljk0NSAwIDAgMCA0Ljk0IDQuOTRoOC4wMmE0Ljk0NSA0Ljk0NSAwIDAgMCA0Ljk0LTQuOTRWNS45NEE0Ljk0NSA0Ljk0NSAwIDAgMCAxMy45NiAxeiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMC4xMTMgMTMuMTM3YTMuMDI4IDMuMDI4IDAgMCAxLTMuMDI1LTMuMDI1IDMuMDI4IDMuMDI4IDAgMCAxIDMuMDI1LTMuMDI0IDMuMDI4IDMuMDI4IDAgMCAxIDMuMDI0IDMuMDI0IDMuMDI4IDMuMDI4IDAgMCAxLTMuMDI0IDMuMDI1bTAtNy42MzdBNC42MTggNC42MTggMCAwIDAgNS41IDEwLjExM2E0LjYxOCA0LjYxOCAwIDAgMCA0LjYxMyA0LjYxMiA0LjYxOCA0LjYxOCAwIDAgMCA0LjYxMi00LjYxMkE0LjYxOCA0LjYxOCAwIDAgMCAxMC4xMTMgNS41TTE0LjcwNCA0LjM3NWExLjAwNCAxLjAwNCAwIDAgMC0xIDFjMCAuMjYzLjEwOC41Mi4yOTQuNzA3LjE4Ni4xODYuNDQ0LjI5My43MDYuMjkzLjI2NCAwIC41MjEtLjEwNy43MDgtLjI5M2ExLjAwNCAxLjAwNCAwIDAgMCAwLTEuNDE1IDEuMDA0IDEuMDA0IDAgMCAwLS43MDgtLjI5MiIvPgogICAgPC9nPgo8L3N2Zz4K" alt=""></li>
                                <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGgyMHYxNEgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMpIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBhdGggZmlsbD0iI0FEQjVCRCIgZD0iTTggMTBWNGw1LjE5NiAzTDggMTB6bTExLjU4Mi03LjgxNEEyLjUwNSAyLjUwNSAwIDAgMCAxNy44MTQuNDE4QzE2LjI1NCAwIDEwIDAgMTAgMFMzLjc0NiAwIDIuMTg2LjQxOGMtLjg2LjIzLTEuNTM4LjkwOC0xLjc2OCAxLjc2OEMwIDMuNzQ2IDAgNyAwIDdzMCAzLjI1NC40MTggNC44MTRjLjIzLjg2LjkwOCAxLjUzOCAxLjc2OCAxLjc2OEMzLjc0NiAxNCAxMCAxNCAxMCAxNHM2LjI1NCAwIDcuODE0LS40MThhMi41MDUgMi41MDUgMCAwIDAgMS43NjgtMS43NjhDMjAgMTAuMjU0IDIwIDcgMjAgN3MwLTMuMjU0LS40MTgtNC44MTR6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt=""></li>
                                <li class="line"></li>
                                <li><img src="/webpack/d8dfc8c46e1a0e819682994549ba4453.svg" alt=""></li>
                                <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTS42MTguMjA3aDYuMzU0djUuMjM1SC42MTh6Ii8+CiAgICAgICAgPHBhdGggaWQ9ImMiIGQ9Ik0wIC40ODhoNy44MTNWMTdIMHoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0FEQjVCRCIgZD0iTTQuNTMgMTguMjdsOC44NjEtNC45OTMtMi4xNzUtMi40OTh6TTExLjIxNiA5LjgxM2wyLjI1NS0yLjQxNi04Ljc4LTQuOTk1eiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExIDcuNTEyKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQURCNUJEIiBkPSJNNi40OTggMi4xNEwzLjAzNS4yMDcuNjE4IDIuODY1bDIuMjU1IDIuNTc3IDMuNTQ0LTIuMDEzYy43MjYtLjMyMy43MjYtLjk2Ny4wODEtMS4yOSIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDEuNTEyKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJkIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQURCNUJEIiBkPSJNMCAxLjI5M3YxNC45MDFjMCAuNDg0LjE2LjcyNS40ODMuODA2bDcuMzMtOC4yMTZMLjQ4My40ODdDLjE2LjY0OCAwIC44OSAwIDEuMjkzIiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt=""></li>
                                <li class="lang_btn">한국어</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="box2">
                        <p>상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 류종민 | 사업자등록번호 209-81-55339 사업자정보확인 | 통신판매업신고번호 2019-서울서초-0260</p>
                        <p>주소 서울특별시 서초구 강남대로 327, 대륭서초타워 18층(서초동) | 이메일 help@myrealtrip.com | 마케팅/제휴 문의 marketing@myrealtrip.com</p>
                        <p class="foot_list">자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다. 마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.</p>
                    </div>
                </div>
            </div>
        </div>`
}