// $(document).on("ready", function() { 
    let f_role = $("#roles-change-first")
    let s_role = $("#roles-change-second")

    let f_roles = Array (" Web ", " Game ", " UI/UX ", " Mobile/Desktop App ", " Graphic ")
    let s_roles = Array (" Developer ", " Developer ", " Designer ", " Developer ", " Designer ")
    
    counter = 0
    setInterval(() => {
        if (counter > 5){
            counter = 0
            f_role.text(f_roles[counter])
            s_role.text(s_roles[counter])
            counter++
        } else {
            f_role.text(f_roles[counter])
            s_role.text(s_roles[counter])
            counter++
        }
    }, 7000);
    
    // for (i=0; i < f_roles.length; i++){
    //     setTimeout(() => {
    //       f_role.text(f_roles[i])  
    //       s_role.text(s_roles[i])  
    //       console.log(f_roles[i])
    //       console.log(s_roles[i])
    //     }, 7000);
    // }
// })