const BASE_URL = "https://static.neshan.org";
const SCRIPT_URL = `${BASE_URL}/sdk/leaflet/1.4.0/leaflet.js`;
const STYLE_URL = `${BASE_URL}/sdk/leaflet/1.4.0/leaflet.css`;

export default function NeshanMapLoader(props) {
    const createScript = () => {
        const { onError, onLoad } = props;
        const script = document.createElement("script");
        const style = document.createElement("link");

        style.rel = 'stylesheet';
        style.href = STYLE_URL;

        script.src = SCRIPT_URL;
        script.onload = () => {
            if (onLoad) onLoad();
            return;
        };
        script.onerror = () => {
            if (onError) onError();
            return;
        };

        document.body.appendChild(script);
        document.head.appendChild(style);
    };

    return createScript();
};

