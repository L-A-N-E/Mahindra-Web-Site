import React from 'react'

const Profile = () => {
    return (
        <>
            <div class="bg-black overflow-hidden h-dvh flex-col flex justify-center">
                <div>
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-white">
                            User Profile
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-100">
                            This is some information about the user.
                        </p>
                    </div>
                    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl class="sm:divide-y sm:divide-gray-200">
                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-100">
                                    Full name
                                </dt>
                                <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                                    John Doe
                                </dd>
                            </div>
                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-100">
                                    Email address
                                </dt>
                                <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                                    johndoe@example.com
                                </dd>
                            </div>
                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-100">
                                    Phone number
                                </dt>
                                <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                                    (123) 456-7890
                                </dd>
                            </div>
                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-100">
                                    Address
                                </dt>
                                <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                                    123 Main St<br/>
                                        Anytown, USA 12345
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile