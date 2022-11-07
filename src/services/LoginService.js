const login =async (username, password) => {
    const loginResponse = await fetch("http://localhost:8080/api/user/login",{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    if(loginResponse.status === 200){
        const resultObj = await loginResponse.json();
        return {
            success:true,
            ...resultObj
        }
    }
    return {
        success : false
    }
}

export {
    login
}