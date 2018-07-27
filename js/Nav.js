var Nd = document.getElementsByClassName('nav-d');
var MdId = document.getElementsByClassName('mendianId');
for (var i = 0; i < Nd.length; i++) {
			Nd[i].index = i;
			Nd[i].onclick = function(){ 
					  $(this).addClass('active');			 
					  $(this).siblings('li').removeClass('active');
					  if($(this).index()==0){
					  		mui.toast("数据存在错误,正在修改")
							$("#L-wid").children().remove()
							$("#R-wid").children().remove()
							$("#M-wid").children().remove()
							fengzhuang(par,1)
					  }else if($(this).index()==1){
					  		mui.toast("数据存在错误,正在修改")
							$("#L-wid").children().remove()
							$("#R-wid").children().remove()
							$("#M-wid").children().remove()
							fengzhuang(par,2)
					  }else if($(this).index()==2){
					  		mui.toast("数据存在错误,正在修改")
							$("#L-wid").children().remove()
							$("#R-wid").children().remove()
							$("#M-wid").children().remove()
							fengzhuang(par,3)
					  }else if($(this).index()==3){
					  		mui.toast("数据存在错误,正在修改")
							$("#L-wid").children().remove()
							$("#R-wid").children().remove()
							$("#M-wid").children().remove()
							fengzhuang(par,4)
					  }else if($(this).index()==4){
					  		mui.toast("数据存在错误,正在修改")
							$("#L-wid").children().remove()
							$("#R-wid").children().remove()
							$("#M-wid").children().remove()
							fengzhuang(par,5)
					  }else{
					  		mui.toast("数据存在错误,正在修改")
							$("#L-wid").children().remove()
							$("#R-wid").children().remove()
							$("#M-wid").children().remove()
							fengzhuang(par,6)
					  }
			
			}
			
		}

$("#SS").click(function(){
	   if($('.switch-anim').prop('checked')){
	   	
        }else{
			  
        }
})
