//get input element
    let filterInput = document.getElementById('filterInput');
    //add event listener
    filterInput.addEventListener('keyup',filterNames);
    
    function filterNames(){
        
        //get value of input
        let filterValue = document.getElementById('filterInput').value.toUpperCase();
        
        //get names ul
        let ul = document.getElementById('names');
        
        //get li's from ul
        let li = ul.querySelectorAll('li.list-group-item');
        
        //loop through collection item li
        for(let i = 0;i < li.length;i++){
            
            let a = li[i].getElementsByTagName('a')[0];
            //if matched
            if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
               li[i].style.display = '';
                console.log(1);
               
               }else{
               li[i].style.display = 'none';
               
               }
            
        }
    
    }
    
    //Add Names
    
    let addNames = document.getElementById('addName');
    
    addNames.addEventListener('click', addContactNames);
    
    function addContactNames() {
        
        let namesInput = document.getElementById('addNamesInput');
        
        let ul = document.getElementById('names');
        
        let li = document.createElement('li');
         
        let a = document.createElement('a');
        
        a.setAttribute('href',"#");
        
        a.innerHTML = namesInput.value;
        
        li.setAttribute('class','list-group-item');
        
       // li.appendChild(document.createTextNode(namesInput.value));
        li.appendChild(a)
        ul.appendChild(li);
       
        
    }
    
    // Sort list
    let sortNames = document.getElementById('sort');
    
    sortNames.addEventListener('click', sortList);
    
    function sortList(){
        
        var list, i, switching, b, shouldSwitch;
        
        list = document.getElementById('names');
        
        switching = true;
        
        // loop until no switching has been done
        while(switching){
            //start by saying no switching is done
            switching = false;
            
            b = list.getElementsByTagName('li');
            
            //loop through all the list items
            for(i = 0; i < b.length - 1; i++){
                
                //start by saying there should be no switching
                shouldSwitch = false;
                
                //check if the next item should switch place with current item
                if(b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()){
                    
                    //if next item is alphabetically lower than current item, mark as a switch and break loop
                    shouldSwitch = true;
                    break;
                    
                    
                }
                
                
            }
            
            if(shouldSwitch){
                //if a switch has been marked, make the switch and mark the switch done
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
                
            }
        }
        
        
        
        
    }
    
    let removeName = document.getElementById('removeName');
    removeName.addEventListener('click', removeNames);
    
    function removeNames(){
        
        let removeNamesInput = document.getElementById('removeNamesInput');
        
        let ul = document.getElementById('names');
        
        let a = ul.getElementsByTagName('a');
        
     
        for(i = 0; i < a.length;i++){
            
           if(removeNamesInput.value == a[i].innerHTML){
            
               
             ul.removeChild(a[i].parentNode);
                
            }
        
            
        }
        
    }
        