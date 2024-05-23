<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\ProjectAssumedRole;
use App\Models\ProjectAssumeRoleFunction;
use App\Models\ProjectBusinessModel;
use App\Models\ProjectProjectType;
use App\Models\ProjectRoleFrameworkLanguage;
use App\Models\ProjectSupportedTestEnv;
use Illuminate\Database\Seeder;
use App\Models\SupportedTestEnvironment;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'system_name' => 'IoT',
                'description' => 'Application which manages the property from the company wherein the phone app is able to connect on a hardware device.',
                'number_of_users' => 1,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [1],
                'project_project_types' => [1],
                'supported_test_envs' => ['iOS Mobile Device'],
                'roles' => [
                    [
                        'role' => 'Property User',
                        'framework_languages' => [17],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'lock operation',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'move out process',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'installation work',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'property information(password) ',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'property information (pin code)',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'room id',
                            ]
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Product Search and Matching',
                'description' => 'Baby goods ranking application',
                'number_of_users' => 2,
                'create_design' => 0,
                'create_specs_doc' => 0,
                'project_business_models' => [2],
                'project_project_types' => [3],
                'supported_test_envs' => ['chrome browser'],
                'roles' => [
                    [
                        'role' => 'Admin User',
                        'framework_languages' => [9],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Campaign Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Article Management',
                            ]
                        ],
                    ],
                    [
                        'role' => 'Standard User',
                        'framework_languages' => [
                            'framework_language_id' => 9,
                        ],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Add Wishlist',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'word of mouth page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'free text input',
                            ]
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Supply Chain Inventory System',
                'description' => 'To track supply chain and their own inventory system. Product Tracking application which allows users to foresee the products supply and demand therefore tracking inventory further.',
                'number_of_users' => 4,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [1],
                'project_project_types' => [1],
                'supported_test_envs' => ['chrome browser', 'android ', 'ios device'],
                'roles' => [
                    [
                        'role' => 'Admin User',
                        'framework_languages' => [2, 10, 13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Order Receipt',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Shipping User',
                        'framework_languages' => [2, 10, 13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Shipping Management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Inventory User',
                        'framework_languages' => [2, 10, 13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Inventory Control',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Manufacturer User',
                        'framework_languages' => [2, 10, 13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Manufacturing Management',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Auction site for selling second hand items.',
                'description' => 'Auction system for second hand items.',
                'number_of_users' => 4,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2, 1],
                'project_project_types' => [1],
                'supported_test_envs' => ['Google Chrome Browser', 'IOS ', 'Android D'],
                'roles' => [
                    [
                        'role' => 'HQ / Main Branch Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'seller account management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Store Branch Manager Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'seller account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'assesment request management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'purchase management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Store Branch Staff Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'seller account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'assesment request management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'purchase management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Seller Account',
                        'framework_languages' => [13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'assesment request management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'sold products management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'points and rewards',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Travel proposal application for non japanese residents.',
                'description' => 'Create a travel proposal application which will serve the international community which includes spanish or wealthy mexicans.',
                'number_of_users' => 3,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [1, 2],
                'project_project_types' => [1],
                'supported_test_envs' => ['Google Chrome Browser'],
                'roles' => [
                    [
                        'role' => 'Administrator Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'products and services management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'invoice template management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'meeting request management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'customer proposal management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'create proposal',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'proposal for purchase order',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'invoice management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Assistant Administrator Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'products and services management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'invoice template management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'meeting request management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'customer proposal management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'create proposal',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'proposal for purchase order',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'invoice management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Customer Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'proposal list',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'billing information management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'invoice management',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Bidding application between Warehouse and Shippers.',
                'description' => 'The main goal is to create an application that will serve as a “warehouse portal” wherein Shippers/Vendors can easily search for warehouse companies (vice versa) based on a specified requirement.
                Moreover,  a portal wherein Warehouse Companies can easily search and bid for job requests.',
                'number_of_users' => 3,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [1],
                'project_project_types' => [1],
                'supported_test_envs' => ['Google Chrome Browser', '1 android', '1 ios device'],
                'roles' => [
                    [
                        'role' => 'System Administrator',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Payment transaction',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Shipper / Vendor',
                        'framework_languages' => [2, 10, 13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'shipper / vendor registration',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'job request management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'bidding management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Warehouse Company',
                        'framework_languages' => [2, 10, 13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'job request search page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'bidding management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'shipping company management',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Recruitment Application which connects between Hiring Company <-> Recruitment Agency <-> Job Applicant',
                'description' => 'The client is a recruitment agency.
                They currently use the following matching system
                https://circus-group.jp/circus/foragent/
                However, the fees and usage charges are high, so they are wondering if they can create a similar system.
                Furthermore, they are wondering if they can sell it.',
                'number_of_users' => 3,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2, 1],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser'],
                'roles' => [
                    [
                        'role' => 'Administrator Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'recruitment company account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'payment invoice',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Recruitment Agency Account / Company Admin',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'job search management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'selection management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'job applicant management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Job Applicant Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'hiring company management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'agent management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'interview template management',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Sales and billing system',
                'description' => 'RECRUIT announced that it will no longer offer the system starting next year (mid 2024) and stop supporting the regional/smaller agents. Hokkaido asked Sprobe to plan/develop/maintain a web app that can become a replacement of such system. They are planning to Replace RECRUIT for business continuity through creating a system the same as HotProfile and SalesNow',
                'number_of_users' => 2,
                'create_design' => 0,
                'create_specs_doc' => 0,
                'project_business_models' => [1, 2],
                'project_project_types' => [2],
                'supported_test_envs' => ['google chrome browser', 'mobile device browser'],
                'roles' => [
                    [
                        'role' => 'System Administrator',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Hot profile',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Sales Now',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Normal User',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Hot profile',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Sales Now',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Rental / Outsourcing Application for Construction Equipments',
                'description' => "To develop a web application system to improve the operational efficiency of the client's current business processes.

                Moreover, to complete & streamline a series of processes from order receipt to tabulation of forms (CSV printout) in the web app system.",
                'number_of_users' => 4,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2, 1],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser', 'mobile device browser'],
                'roles' => [
                    [
                        'role' => 'Client User',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Job order Management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Admin User',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Job order Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'operator account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'client account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'kinan account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'calendar schedule settings',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Standard / Kinan User',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'machinery management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Company Operator Users',
                        'framework_languages' => [2, 10, 13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Job order Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Daily Report',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Stand alone windows forms application which embeds drawing based on xml coordinates into the PDF File.',
                'description' => "Create a desktop resident app that can read pdf file and xml files.
                A tool that will feed the file into the application, extract the coordinates from the xml file and plot it into the PDF file. 
                The newly updated PDF file will be generated as an image and will be saved in the use’s local machine.",
                'number_of_users' => 1,
                'create_design' => 0,
                'create_specs_doc' => 0,
                'project_business_models' => [1, 2],
                'project_project_types' => [1],
                'supported_test_envs' => ['windows 11 machine'],
                'roles' => [
                    [
                        'role' => 'Normal User',
                        'framework_languages' => [20],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'PDF / XML File Monitoring (must display in task tray)',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'PDF /XML Processing',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Setup Windows Scheduler',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Convert Updated PDF To Image',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'File Retention / Expiry Settings',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Matching System',
                'description' => "An application that connects ground transportation shipping companies and shippers, those shippers who want to request ground shipping work to shipping companies. Also create recruiting matching function within the site, that allows truck drivers and other job seekers looking for transportation companies for ground transportation related jobs.",
                'number_of_users' => 4,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [1, 2],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser'],
                'roles' => [
                    [
                        'role' => 'Operator Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'company management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'company service management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'driver management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'blog management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Shipping Company Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'company information management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'company services management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'inquiry list',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'delivery booking management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'job posting management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'applicants list',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'drivers list',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Shipper Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'delivery booking management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Driver Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'delivery booking management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'application list',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Buy and sell Application for Automobiles / Cars',
                'description' => "Create an app that allows sellers to register, allow all branches to have an access. seller data to be stored in a centralized Data Storage.",
                'number_of_users' => 3,
                'create_design' => 0,
                'create_specs_doc' => 0,
                'project_business_models' => [2],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser'],
                'roles' => [
                    [
                        'role' => 'Admin Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'account management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Store in Charge Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'seller management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'assesment management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'promotion management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Seller Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'membership registration',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'transaction record (assesment request)',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'points / rewards',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Matching application between people buying / selling companies',
                'description' => "To develop a matching platform for people who want to buy companies and people who want to sell companies in M&A.",
                'number_of_users' => 4,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [1],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser'],
                'roles' => [
                    [
                        'role' => 'Administrator Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'registration for inspection (buyers and advisors)',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'individual consultation',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'media site management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'email magazine management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'column page management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'M&A Advisor Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'examination application',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'sales transaction management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Seller Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Conduct Interview',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Sales Transaction List',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Buyer Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'profile management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'sales transaction management',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Language Learning Application for Non English Native Speakers',
                'description' => "Client wants us to build a mobile application of which will allow native japanese speakers to learn english through language learning mobile app.",
                'number_of_users' => 2,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser', '1 ios', '1 android device'],
                'roles' => [
                    [
                        'role' => 'Administrator Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'vocabulary management page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'user management page',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Normal User',
                        'framework_languages' => [13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'advertising viewer page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'vocabulary cards page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'offline mode app availability',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Language Learning Application for Non English Native Speakers',
                'description' => "Client wants us to build a mobile application of which will allow native japanese speakers to learn english through language learning mobile app.",
                'number_of_users' => 2,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2],
                'project_project_types' => [2],
                'supported_test_envs' => ['google chrome browser', '1 ios', '1 android device'],
                'roles' => [
                    [
                        'role' => 'Administrator Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'vocabulary management page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'user management page',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Normal User',
                        'framework_languages' => [13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'advertising viewer page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'vocabulary cards page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'offline mode app availability',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Job Application Form Assistant Application',
                'description' => "Application which proof reads resume and application form and generates corresponding corrections.",
                'number_of_users' => 3,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser', '1 ios', '1 android device'],
                'roles' => [
                    [
                        'role' => 'System Administrator',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Request Correction List',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Correction Management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'HR Corrector',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Request Correction List',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Correction Management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Students',
                        'framework_languages' => [13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'ES (Job Application) Form Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Correction Request List',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Corrected Files List',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'BCP Application with AI Features',
                'description' => "Business Continuity Process analysis of documents based on files uploaded by user into the cloud. This will generate a complete set of questions based on criteria set by user.",
                'number_of_users' => 3,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser', '1 ios', '1 android device'],
                'roles' => [
                    [
                        'role' => 'Admin',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'BCP Documents Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Training Content Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Learning Content Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Company Users Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Contracted Company Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Newton Users Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Training Template Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'BCP Document Template Management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Company Admin',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'BCP Documents Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Training Content Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Learning Content Management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Company Users',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Training Content List',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Learning Content List',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Ranking Screen',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Company Users',
                        'framework_languages' => [13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Training Content List',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Learning Content List',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Ranking Screen',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Examination / auditing application for tracking farms applying for organic certificates',
                'description' => "Create an auditing application of which will be done paperless therefore less documents to be brought with.",
                'number_of_users' => 2,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [1],
                'project_project_types' => [1],
                'supported_test_envs' => ['1 ios', '1 android device'],
                'roles' => [
                    [
                        'role' => 'System Administrator User',
                        'framework_languages' => [13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'User account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'image management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'template management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'jas class management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'application correction',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Auditor User',
                        'framework_languages' => [13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'operator list',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'onsite location management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'PDF Preview',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Equipment List Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Farm Materials List Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Application Correction Notification',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Documents Review List Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Audit Checklist Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Confirmation Memo',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Processing ',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Certification Processing ',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Matching application between homeowners requesting renovation and craftsman organizations.',
                'description' => "Create an application which allows homeowners to make estimations on renovations to be made on their own and negotiate to an assigned craftsman. Once tasks is completed then the homeowner will pay the craftsman.",
                'number_of_users' => 3,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser'],
                'roles' => [
                    [
                        'role' => 'Customer / Homeowner Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'new registration for customer',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'easy quote creation',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'my created quotation',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'view craftsman account and review',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'image uploaded',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Craftsman / General Contractor Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'new registration for craftsman',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'quotation request viewer',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'construction history',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'view customers account and reviews',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Admin User Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'construction management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'paint configuration management',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Invoice Association and Management',
                'description' => "* Analyze the sent mail data (.msg) in Outlook and save the attached file. For invoices, associate and save the invoice details.
                * Provides a search function for invoices based on electronic book keeping visits and a storage function for related files.
                * Various documents (invoices, quotations, fliers, etc.) can be registered.
                * Associate documents with a specific request.
                * The text of the e-mail associated with the invoice should also be available for reference.",
                'number_of_users' => 5,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [1],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser'],
                'roles' => [
                    [
                        'role' => 'Billing Person Account',
                        'framework_languages' => [7],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'invoice management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Sales Person Account',
                        'framework_languages' => [7],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'project Management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'General User Account',
                        'framework_languages' => [7],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'email data registration',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'invoice search',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'file management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'file tags association management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'file download',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'billing tag management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Administrator Account',
                        'framework_languages' => [7],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'invoice management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'billing approval',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'restore file',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'operation history',
                            ],
                        ],
                    ],
                    [
                        'role' => 'System Admin User Account',
                        'framework_languages' => [7],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'user administration',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Key Tracking Application based on user borrowing / assignment.',
                'description' => "To migrate existing application from vb.net to c#. Application will still perform same tasks which is to manage keys based on previous implementation.",
                'number_of_users' => 2,
                'create_design' => 0,
                'create_specs_doc' => 0,
                'project_business_models' => [],
                'project_project_types' => [2],
                'supported_test_envs' => ['windows 11 machine'],
                'roles' => [
                    [
                        'role' => 'Manager Account',
                        'framework_languages' => [20],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Login Screen for Manager',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'format output modification',
                            ],
                        ],
                    ],
                    [
                        'role' => 'User Account',
                        'framework_languages' => [20],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Login Screen for User Account',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'pdf linking',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'auto conversion of vision file to pdf format',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'management information',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => '',
                'description' => "An application which allows students to match a specific highschool based on their skillsets.",
                'number_of_users' => 3,
                'create_design' => 0,
                'create_specs_doc' => 0,
                'project_business_models' => [2],
                'project_project_types' => [2],
                'supported_test_envs' => ['google chrome browser'],
                'roles' => [
                    [
                        'role' => 'Admin Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Cram School Account Management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Education News Section',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'Student Search',
                            ],
                        ],
                    ],
                    [
                        'role' => 'School Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'student / parent account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'instagram integration',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'student search (add OR condition, internal score filter, student profile filter, mock exam filter)',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'delivery message',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Student Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'profile unsubscribe',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'require grade and gender',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'register nearest station by selecting train line',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'public viewing school',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'notifications to student favorite school',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'improved accuracy (recommended schools)',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'enhanced search tag',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'create tag generation',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'student and parent linking',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'system_name' => 'Sports Fitness App',
                'description' => "An application to encourage students to undergo or continue their daily Sports Training.",
                'number_of_users' => 2,
                'create_design' => 1,
                'create_specs_doc' => 1,
                'project_business_models' => [2],
                'project_project_types' => [1],
                'supported_test_envs' => ['google chrome browser', 'ios', 'android device'],
                'roles' => [
                    [
                        'role' => 'Administrator Account',
                        'framework_languages' => [2, 10],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'account management',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'task management',
                            ],
                        ],
                    ],
                    [
                        'role' => 'Student Account',
                        'framework_languages' => [13],
                        'functions' => [
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'profile page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'sport selection page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'challenge list',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'goals list',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'task page',
                            ],
                            [
                                'masterlist_function_id' => 19,
                                'function_name' => 'realtime video call with coach',
                            ],
                        ],
                    ],
                ],
            ],
        ];

        foreach ($projects as $project) {
            $createdProject = Project::create([
                'is_template' => 1,
                'system_name' => $project['system_name'],
                'description' => $project['description'],
                'number_of_users' => $project['number_of_users'],
                'create_design' => $project['create_design'],
                'create_specs_doc' => $project['create_specs_doc'],
            ]);

            foreach ($project['project_business_models'] as $businessModel) {
                ProjectBusinessModel::create([
                    'project_id' => $createdProject?->id,
                    'business_model_id' => $businessModel,
                ]);
            }

            foreach ($project['project_project_types'] as $projectType) {
                ProjectProjectType::create([
                    'project_id' => $createdProject?->id,
                    'project_type_id' => $projectType,
                ]);
            }

            foreach ($project['supported_test_envs'] as $supportedTestEnv) {
                $createdTestEnv = SupportedTestEnvironment::create([
                    'name' => $supportedTestEnv
                ]);

                ProjectSupportedTestEnv::create([
                    'project_id' => $createdProject?->id,
                    'support_test_env_id' => $createdTestEnv?->id,
                ]);
            }

            foreach ($project['roles'] as $role) {
                $createdRole = ProjectAssumedRole::create([
                    'project_id' => $createdProject?->id,
                    'user_role' => $role['role']
                ]);

                foreach ($role['framework_languages'] as $roleFrameworkLanguage) {
                    ProjectRoleFrameworkLanguage::create([
                        'project_id' => $createdProject?->id,
                        'assumed_role_id' => $createdRole?->id,
                        'framework_language_id' => $roleFrameworkLanguage,
                    ]);
                }

                foreach ($role['functions'] as $key => $function) {
                    ProjectAssumeRoleFunction::create([
                        'project_id' => $createdProject?->id,
                        'group_number' => $key + 1,
                        'assumed_role_id' => $createdRole?->id,
                        'masterlist_function_id' => $function['masterlist_function_id'],
                        'function_name' => $function['function_name'],
                    ]);
                }
            }
        }
    }
}
