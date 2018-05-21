<template>
  <div class="information">
    <div class="container">
	<div class="row clearfix">
        <!-- <h1>个人资料</h1> -->
        <table class="table" align="center">
            <tbody>
                <tr><td style="text-align:center">头像</td>
                    <td><img alt="140x140" src="http://himg.bdimg.com/sys/portrait/item/76ab79696e69616e796f757975db05.jpg" /></td>
                <tr>
                    <td>
                        姓名
                    </td>
                    <td width="800">
                        <div v-if="nameModify===false" v-on:click="changeName">{{TrueName}}</div>
                        <div v-if="nameModify">
                            <input id='inputName' v-model="TrueName" v-on:keyup.13="chanNameEd"/>
                            <button v-on:click="chanNameEd">完成</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        性别
                    </td>
                    <td width="800">
                        <div v-if="sexModify===false" v-on:click="changeSex">{{Sex}}</div>
                        <div v-if="sexModify">
                            <input id='inputSex' v-model="Sex" v-on:keyup.13="chanSexEd"/>
                            <button v-on:click="chanSexEd">完成</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        学院
                    </td>
                    <td width="800">
                        <div v-if="academyModify===false" v-on:click="changeAcademy">{{Academy}}</div>
                        <div v-if="academyModify">
                            <input id='inputAcademy' v-model="Academy" v-on:keyup.13="chanAcademyEd"/>
                            <button v-on:click="chanAcademyEd">完成</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        ？？
                    </td>
                    <td>
                        ？
                    </td>
                </tr>
                <tr><td></td><td></td></tr>
            </tbody>
        </table>
	</div>
</div>
  </div>
</template>


<script>
  export default {
    name: 'information',

    data () {
      return {
        username: 'USERNAME',
        TrueName: 'name',
        Sex: 'sex',
        Academy: 'xueyuan',
        nameModify: false,
        sexModify: false,
        academyModify: false
      }
    },

    methods:{
        changeName(){this.nameModify=true;},
        chanNameEd(){this.nameModify=false;},
        changeSex(){this.sexModify=true;},
        chanSexEd(){this.sexModify=false;},
        changeAcademy(){this.academyModify=true;},
        chanAcademyEd(){this.academyModify=false;},
        
    }

    
  }
</script>



