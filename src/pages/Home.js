import React from 'react'
import { Container ,Row, Col, Card} from 'react-bootstrap';

function Home() {
    return (
        <>
        <style type="text/css">
        </style>

        <div className="container">
            <div className="row">
                <div className="mt-10 mb-10">
                    <h1 className="mb-30">React App 목록입니다.</h1>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">메모장</h5>
                            <h6 class="card-subtitle mb-2 text-muted">메모장</h6>
                            <p class="card-text">간단한 메모 어플리케이션</p>
                            <a href="/page1" class="card-link">Card link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">메모장</h5>
                            <h6 class="card-subtitle mb-2 text-muted">메모장</h6>
                            <p class="card-text">간단한 메모 어플리케이션</p>
                            <a href="/page2" class="card-link">Card link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">파일 컴포넌트</h5>
                            <h6 class="card-subtitle mb-2 text-muted">파일테스트화면</h6>
                            <p class="card-text">파일 테스트 화면</p>
                            <a href="/filetest" class="card-link">Card link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Todo list</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Todo list</h6>
                            <p class="card-text">Todo list 어플리케이션</p>
                            <a href="/todopage" class="card-link">Card link</a>
                        </div>
                    </div>    
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Django Todolist</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Todo list</h6>
                            <p class="card-text">Django TODO app</p>
                            <a href="/djangotodo" class="card-link">Card link</a>
                        </div>
                    </div>  
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">채팅 어플리케이션</h5>
                            <h6 class="card-subtitle mb-2 text-muted">chat</h6>
                            <p class="card-text">chat</p>
                            <a href="/chat" class="card-link">link</a>
                        </div>
                    </div>  
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">노트</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Note</h6>
                            <p class="card-text">Note</p>
                            <a href="/note" class="card-link">link</a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
