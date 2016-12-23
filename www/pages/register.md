---
layout : register
title: "Register"
permalink: /register/
---
<dl>
<div class="container">
    <div class="row">
        <div class="col-xs-12">
        <img src="../images/logo_kleur_hr.png" class="logo_login" alt="">            
            <form id="register-form" class="form-signin">
                <input id="name1" type="text" class="form-control" placeholder="Login naam"/>
                <br>
                <input id="pw" type="password" class="form-control" placeholder="Wachtwoord"/>
                <br>
                <input id="rgstr_btn" type="submit" name="register" value="Register" class="btn btn-primary" onClick="store()"/>
            </form>
            <br>
            <form id="login-form"> 
                <input id="userName" type="text" class="form-control" placeholder="Login naam" value=""/>
                <br>
                <input id="userPw" type="password" class="form-control" placeholder="Wachtwoord" value=""/>
                <br>
                <input id="login_btn" type="submit" value="Login" class="btn btn-primary" onClick="check()"/>
                <br>
                <p><a href="/home/">Continue to site</a></p>
            </form>
        </div>
    </div>
</div>
</dl>