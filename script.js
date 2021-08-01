function defineEvents(){
			var expanded = false;
			var xx= document.getElementsByClassName("expander");
			for (var i = xx.length - 1; i >= 0; i--) {
				xx[i].addEventListener("mouseenter", function(){ 
					this.style.color = "red";
					this.innerHTML = "&laquo;";
					});
				xx[i].addEventListener("mouseout", function(){ 
					this.style.color = "navy";
					this.innerHTML = "&raquo;";
					});
			}
			xx[0].addEventListener("click", function(e){ 
					if(expanded){
						CollapseOne(e);
					}
					else{
						ExpandOne(e);
					}
					expanded = !expanded;
					}); /*click not onclick*/
		}
		function largeExpander(percent) {
			// body...
			document.getElementById("mark-table").style.fontSize = percent+"%";
		}
		function ExpandAll() {
			var xx= document.getElementsByClassName("sub-tr");
			for (var i = xx.length - 1; i >= 0; i--) {
				xx[i].style.display="table-row";
			}
		}
		function CollapseAll(){
			var xx= document.getElementsByClassName("sub-tr");
			for (var i = xx.length - 1; i >= 0; i--) {
				xx[i].style.display="none";
			}
			console.log(xx);
		}
		function CollapseOne(element){
			var xx =document.querySelectorAll('[for="'+1+'"]');
			for (var i = xx.length - 1; i >= 0; i--) {
				xx[i].style.display="none";
			}
			console.log(xx);
		}
		function ExpandOne(element){
			var xx =document.querySelectorAll('[for="'+1+'"]');
			for (var i = xx.length - 1; i >= 0; i--) {
				xx[i].style.display="table-row";
			}
			console.log(xx);
		}