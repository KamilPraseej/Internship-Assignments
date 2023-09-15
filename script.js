const token = "BQA30bGsW9ulbqXmAGX5u6SaLlv97Tx3zLmOkd-LTeiLqzG3pTUYSD4rQos2l_dAEP02qJ8peEsTomC5NcRmPYW8CK3g-UreBISYYeRThSdOvZW2TfA6RGzX_VmjA3kKgLDHcjuA0sTWoSlHulA_BMdbw5F3CBjspxvJCAGsZ9db4yS9R-AOMk7xyFS92zADXVOaOOZCwCBWqIru3ERPh0Eas9FwzFruKOymIjJvUO-2bLFdqQudxL5XN0UKydjgAUbE0HztnnsueHhQYqk5cf0Z";
const url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6";

const request = new Request(
    url, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

async function getData() {
    try {
        const response = await fetch(request);
        const data = await response.json();
        if (response.status === 200) {
           
            const dataElement = document.getElementById("api-data");
        
            const formattedData = JSON.stringify(data, null, 2);
            const formattedHTML = formattedData.replace(/\n/g, "<br>").replace(/  /g, "&nbsp;&nbsp;");
            dataElement.innerHTML = formattedHTML;
        } else {
            
            const dataElement = document.getElementById("api-data");
            dataElement.innerHTML = `Server Error: ${data.error.message}`;
        }
    } catch (error) {
        console.log('ERROR: ', error);
    }  

}

getData()
