document.addEventListener('DOMContentLoaded', function() {
    const topAdHtml = `
        <div class="max-w-4xl mx-auto mb-12">
            <div class="text-xs text-gray-500 mb-1 text-right">Sponsored</div>
            <div class="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow relative">
                <a href="https://happyhopper.app" class="block text-white">
                    <div class="flex flex-col items-center justify-center space-y-2">
                        <h4 class="text-xl font-bold">Find Happy Hours & Restaurant Deals Near You!</h4>
                        <p class="text-sm">Save money at local restaurants with HappyHopper - the best happy hours, daily specials, and events</p>
                        <button class="bg-white text-emerald-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100">
                            Find Restaurant Deals Now →
                        </button>
                    </div>
                </a>
            </div>
        </div>
    `;

    const bottomAdHtml = `
        <div class="max-w-4xl mx-auto mt-16">
            <div class="text-xs text-gray-500 mb-1 text-right">Sponsored</div>
            <div class="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <a href="https://happyhopper.app/get-app" class="block text-white">
                    <div class="flex flex-col items-center justify-center space-y-2">
                        <h4 class="text-xl font-bold">HappyHopper - Your Local Deal Finder</h4>
                        <p class="text-sm">Never miss a happy hour or restaurant special again!</p>
                        <button class="bg-white text-emerald-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100">
                            Download Happy Hour App →
                        </button>
                    </div>
                </a>
            </div>
        </div>
    `;
    
    const topAd = document.getElementById('top-ad-placeholder');
    const bottomAd = document.getElementById('bottom-ad-placeholder');
    
    if (topAd) {
        topAd.innerHTML = topAdHtml;
    }
    
    if (bottomAd) {
        bottomAd.innerHTML = bottomAdHtml;
    }
});
