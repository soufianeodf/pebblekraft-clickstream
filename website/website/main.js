window.addEventListener("load", function(){

    fetch('http://api.ipstack.com/check?access_key=1349bb074dddcda3b492fb6c11b45409&format=1')
        .then(response => response.json())
        .then(data => {
            window.user = {
                country: data.country_name,
                state: data.region_name,
                city: data.city,
                postal: data.zip,
                latitude: data.latitude,
                longitude: data.longitude,
                ip: data.ip,
                continent_code: data.continent_code,
                continent_name: data.continent_name,
                country_code: data.country_code,
                region_code: data.region_code,
                capital_city: data.location.capital,
                language_code: data.location.languages[0].code,
                language_name: data.location.languages[0].name,
                country_flag_url: data.location.country_flag,
                country_flag_emoji: data.location.country_flag_emoji,
            }

            let payload = {
                type: 'user_tracking', // ["user_tracking", "js_tracking"]
                category: 'on_page_load', // ["on_page_load", "search_bar", "product_detail_view"]

                user_stone_category: null,
                user_search_bar_text: null,

                user_user_id: null,
                user_user_name: null,
                user_company_id: null,
                user_company_name: null,

                user_product_visited_id: null,
                user_product_visited_name: null,
                user_product_visited_time: null,
                user_product_visited_scroll_percentage: null,
                user_product_visited_company_id: null,
                user_product_visited_company_name: null,

                country: window.user.country,
                state: window.user.state,
                city: window.user.city,
                postal: window.user.postal,
                latitude: window.user.latitude,
                longitude: window.user.longitude,
                ip: window.user.ip,
                continent_code: window.user.continent_code,
                continent_name: window.user.continent_name,
                country_code: window.user.country_code,
                region_code: window.user.region_code,
                capital_city: window.user.capital_city,
                language_code: window.user.language_code,
                language_name: window.user.language_name,
                country_flag_url: window.user.country_flag_url,

                js_error_msg: null,
                js_error_level: null,
                js_url: null,
                js_line: null,
                js_column: null,
                js_is_error_caught: null,
            };

            divolte.signal('onloadEvent', payload);

            document.getElementById("content").textContent = JSON.stringify(payload, undefined, 2);
        })
        .catch(err => console.error(err));

});
