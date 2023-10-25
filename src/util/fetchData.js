export const fetchData = async (setData) => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/HeiPavel/test_json/master/tabs.json');
        const jsonResponse = await response.json();
        jsonResponse.sort((a, b) => a.order - b.order);
        setData(jsonResponse);
    } catch(error) {
        console.log(error);
    }
}