import React from 'react';
import './join.css'

const Join = () => {
    return (
        <div className='join'>
            <div className='joinSub'>

                <div className='joinSlogan'>
                    <p>세 살 버릇 여든까지!</p>
                </div>

                <div className='joinImage'>
                    <img ClassName="joinParent " src="img/parentJoin.png"></img>
                </div>
                

                <div className="joinInput">
                    <form action="#" method="post">
                        <p>
                            <label for="username">이름</label><br/><br/>
                            <input type="text" id="username" required></input>
                        </p>
                        <p>
                            <label for="email">이메일</label><br/><br/>
                            <input type="email" id="email" required></input>
                        </p>
                        <p>
                            <label for="userpw">비밀번호</label><br/><br/>
                            <input type="password" id="userpw" required></input>
                        </p>
                        <p>
                            <label for="userpwCheck">비밀번호 확인</label><br/><br/>
                            <input type="password" id="userpwCheck" required></input>
                        </p>

                        <p>
                        <button>다음</button>
                        </p>
                    </form>
                </div>

              
            </div>

        </div>
    );
};

export default Join;