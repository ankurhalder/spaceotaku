import { useEffect } from "react";

const YandexMetrika = () => {
	useEffect(() => {
		(function (d, w, c) {
			(w[c] = w[c] || []).push(function () {
				try {
					w.yaCounter95271325 = new Ya.Metrika({
						id: 95271325,
						clickmap: true,
						trackLinks: true,
						accurateTrackBounce: true,
						webvisor: true,
						trackHash: true,
						ecommerce: "dataLayer",
					});
				} catch (e) {}
			});
			var n = d.getElementsByTagName("script")[0],
				x = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js",
				s = d.createElement("script"),
				f = function () {
					n.parentNode.insertBefore(s, n);
				};
			for (var i = 0; i < document.scripts.length; i++) {
				if (document.scripts[i].src === x) {
					return;
				}
			}
			s.type = "text/javascript";
			s.async = true;
			s.src = x;
			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else {
				f();
			}
		})(document, window, "yandex_metrika_callbacks");
	}, []);

	return null;
};

export default YandexMetrika;
