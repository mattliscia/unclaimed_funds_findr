document.addEventListener('DOMContentLoaded', function() {
    const topAdHtml = `
        <div class="max-w-4xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
            <div class="text-xs text-gray-500 mb-1 text-right">Sponsored</div>
            <div class="p-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow relative">
                <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
                    <img src="/images/happyhopper-logo.png" alt="HappyHopper Logo" class="hidden md:block w-16 h-16 object-contain mx-4" />
                    <a href="https://happyhopper.app" class="block text-white flex-1">
                        <div class="flex flex-col items-center justify-center space-y-2">
                            <div class="flex items-center space-x-2 mx-2 sm:mx-4">
                                <img src="/images/happyhopper-logo.png" alt="HappyHopper Logo" class="w-12 h-12 md:hidden object-contain" />
                                <h4 class="text-xl font-bold">Find Happy Hours & Restaurant Deals Near You!</h4>
                                <img src="/images/happyhopper-logo.png" alt="HappyHopper Logo" class="w-12 h-12 md:hidden object-contain" />
                            </div>
                            <p class="text-sm mx-4 sm:mx-8">Save money at local restaurants with HappyHopper - the best happy hours, daily specials, and events</p>
                            <button class="bg-white text-emerald-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100">
                                Find Restaurant Deals Now →
                            </button>
                        </div>
                    </a>
                    <img src="/images/happyhopper-logo.png" alt="HappyHopper Logo" class="hidden md:block w-16 h-16 object-contain mx-4" />
                </div>
            </div>
        </div>
    `;

    const bottomAdHtml = `
        <div class="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
            <div class="text-xs text-gray-500 mb-1 text-right">Sponsored</div>
            <div class="p-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
                    <img src="/images/happyhopper-logo.png" alt="HappyHopper Logo" class="hidden md:block w-16 h-16 object-contain mx-4" />
                    <a href="https://happyhopper.app/get-app" class="block text-white flex-1">
                        <div class="flex flex-col items-center justify-center space-y-2">
                            <div class="flex items-center space-x-2 mx-2 sm:mx-4">
                                <img src="/images/happyhopper-logo.png" alt="HappyHopper Logo" class="w-12 h-12 md:hidden object-contain" />
                                <h4 class="text-xl font-bold">HappyHopper - Your Local Deal Finder</h4>
                                <img src="/images/happyhopper-logo.png" alt="HappyHopper Logo" class="w-12 h-12 md:hidden object-contain" />
                            </div>
                            <p class="text-sm mx-4 sm:mx-8">Never miss a happy hour or restaurant special again!</p>
                            <button class="bg-white text-emerald-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100">
                                Download Happy Hour App →
                            </button>
                        </div>
                    </a>
                    <img src="/images/happyhopper-logo.png" alt="HappyHopper Logo" class="hidden md:block w-16 h-16 object-contain mx-4" />
                </div>
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
