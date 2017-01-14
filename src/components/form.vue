<template>
<div>
  <header class="bar bar-nav">
    <h1 class='title'>表单</h1>
  </header>
  <div class="content">
    <div class="list-block">
      <ul>
        <!-- Text inputs -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">姓名</div>
              <div class="item-input">
                <input type="text" placeholder="Your name" v-model="username">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-email"></i></div>
            <div class="item-inner">
              <div class="item-title label">邮箱</div>
              <div class="item-input">
                <input type="email" placeholder="E-mail" v-model="email">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-password"></i></div>
            <div class="item-inner">
              <div class="item-title label">密码</div>
              <div class="item-input">
                <input type="password" placeholder="Password" class="" v-model="password">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-gender"></i></div>
            <div class="item-inner">
              <div class="item-title label">性别</div>
              <div class="item-input">
                <select v-model="sex">
                  <option value=1>Male</option>
                  <option value=2>Female</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <!-- Date -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-calendar"></i></div>
            <div class="item-inner">
              <div class="item-title label">生日</div>
              <div class="item-input">
                <input type="date" placeholder="Birth day" v-model="bir">
              </div>
            </div>
          </div>
        </li>
        <!-- Switch (Checkbox) -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-toggle"></i></div>
            <div class="item-inner">
              <div class="item-title label">开关</div>
              <div class="item-input">
                <label class="label-switch">
                  <input type="checkbox" v-model="picked">
                  <div class="checkbox"></div>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-comment"></i></div>
            <div class="item-inner">
              <div class="item-title label">简介</div>
              <div class="item-input">
                <textarea v-model="message"></textarea>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-block">
      <div class="row">
        <div class="col-50"><a href="#" class="button button-big button-fill button-danger">取消</a></div>
        <div class="col-50"><a href="#" class="button button-big button-fill button-success">提交</a></div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
    export default{
       data() {
           return {
              username :'',
              email :'',
              password :'',
              sex : 1,
              bir :'2014-04-30',
              picked : false,
              message :""

           }
       }
    }
</script>