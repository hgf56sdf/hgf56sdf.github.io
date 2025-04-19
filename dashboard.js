// Enhanced dashboard.js with new features

// DOM Elements - Global Access
const loginScreen = document.getElementById('login-screen');
const onboardingScreen = document.getElementById('onboarding-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const badgeOverlay = document.getElementById('badge-overlay');
const videoModal = document.getElementById('video-modal');

// Navigation state management
let currentSection = 'home';

// Workout Library Data
const workouts = [
    {
        id: 1,
        title: "Full Body HIIT",
        description: "(Dumbbell Required!) 10-minute high intensity interval training to boost your metabolism and burn calories.",
        difficulty: "intermediate",
        duration: "10 min",
        calories: "300",
        thumbnail: "https://www.puregym.com/media/rhcdjrfv/hiit-workouts-for-men_blogheader-no-title.jpg",
        videoUrl: "https://www.youtube.com/embed/VF9JtlaunjE?enablejsapi=1",
        instructions: [
            { exercise: "Jumping Jacks", reps: "30 seconds", rest: "10 seconds" },
            { exercise: "Push-ups", reps: "12 reps", rest: "10 seconds" },
            { exercise: "Mountain Climbers", reps: "30 seconds", rest: "10 seconds" },
            { exercise: "Dumbbell Squats", reps: "15 reps", rest: "10 seconds" },
            { exercise: "Burpees", reps: "10 reps", rest: "15 seconds" }
        ]
    },
    {
        id: 2,
        title: "Morning Yoga Flow",
        description: "Start your day with this energizing yoga flow to improve flexibility and focus.",
        difficulty: "beginner",
        duration: "22 min",
        calories: "120",
        thumbnail: "https://manflowyoga.com/wp-content/uploads/2022/02/15-Minute-Morning-Yoga-Routine-men-Deep-Squat-1024x576.jpg",
        videoUrl: "https://www.youtube.com/embed/3t50Sr-FATo?enablejsapi=1",
        instructions: [
            { exercise: "Child's Pose", reps: "30 seconds", rest: "5 seconds" },
            { exercise: "Cat-Cow Stretch", reps: "10 cycles", rest: "5 seconds" },
            { exercise: "Downward Dog", reps: "45 seconds", rest: "5 seconds" },
            { exercise: "Low Lunge (each side)", reps: "30 seconds", rest: "5 seconds" },
            { exercise: "Warrior II (each side)", reps: "45 seconds", rest: "5 seconds" }
        ]
    },
    {
        id: 3,
        title: "Core Crusher",
        description: "Strengthen your abs and improve posture with this targeted core workout.",
        difficulty: "intermediate",
        duration: "10 min",
        calories: "150",
        thumbnail: "https://sunnyhealthfitness.com/cdn/shop/articles/10-Minute-Core-Crusher-Workout.jpg",
        videoUrl: "https://www.youtube.com/embed/c1jCUf13Udo?enablejsapi=1",
        instructions: [
            { exercise: "Crunches", reps: "20 reps", rest: "15 seconds" },
            { exercise: "Plank", reps: "45 seconds", rest: "15 seconds" },
            { exercise: "Russian Twists", reps: "16 reps (8 each side)", rest: "15 seconds" },
            { exercise: "Leg Raises", reps: "12 reps", rest: "15 seconds" },
            { exercise: "Mountain Climbers", reps: "30 seconds", rest: "15 seconds" }
        ]
    },
    {
        id: 4,
        title: "Upper Body Strength",
        description: "(Dumbbell Required!) Build strength in your arms, shoulders, and back with this dumbbell workout.",
        difficulty: "advanced",
        duration: "10 min",
        calories: "220",
        thumbnail: "https://hips.hearstapps.com/hmg-prod/images/gus-witfitness-173546894-499261391255959-7277244445477205499-n-1-1625137180.jpg",
        videoUrl: "https://www.youtube.com/embed/-prMeNxLB7E?enablejsapi=1",
        instructions: [
            { exercise: "Dumbbell Shoulder Press", reps: "12 reps", rest: "20 seconds" },
            { exercise: "Bent-Over Rows", reps: "14 reps", rest: "20 seconds" },
            { exercise: "Bicep Curls", reps: "12 reps", rest: "20 seconds" },
            { exercise: "Tricep Extensions", reps: "12 reps", rest: "20 seconds" },
            { exercise: "Push-ups", reps: "Max reps", rest: "20 seconds" }
        ]
    },
    {
        id: 5,
        title: "Lower Body Burn",
        description: "Target your legs and glutes with this challenging lower body workout.",
        difficulty: "advanced",
        duration: "20 min",
        calories: "350",
        thumbnail: "https://hips.hearstapps.com/hmg-prod/images/mh-may-fitness-social-index-1556725054.png",
        videoUrl: "https://www.youtube.com/embed/-hSma-BRzoo?enablejsapi=1",
        instructions: [
            { exercise: "Squats", reps: "20 reps", rest: "20 seconds" },
            { exercise: "Lunges (each leg)", reps: "12 reps", rest: "20 seconds" },
            { exercise: "Glute Bridges", reps: "15 reps", rest: "20 seconds" },
            { exercise: "Calf Raises", reps: "25 reps", rest: "20 seconds" },
            { exercise: "Wall Sit", reps: "45 seconds", rest: "30 seconds" }
        ]
    },
    {
        id: 6,
        title: "Cardio Blast",
        description: "Get your heart rate up with this no-equipment cardio workout.",
        difficulty: "intermediate",
        duration: "10 min",
        calories: "200",
        thumbnail: "https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/3_fat_blasting_workouts_for_maximum_fat_loss_-_1000x500.jpg",
        videoUrl: "https://www.youtube.com/embed/c2aSpxlm0Mw?enablejsapi=1",
        instructions: [
            { exercise: "Jumping Jacks", reps: "45 seconds", rest: "15 seconds" },
            { exercise: "High Knees", reps: "45 seconds", rest: "15 seconds" },
            { exercise: "Butt Kicks", reps: "45 seconds", rest: "15 seconds" },
            { exercise: "Lateral Jumps", reps: "45 seconds", rest: "15 seconds" },
            { exercise: "Mountain Climbers", reps: "45 seconds", rest: "15 seconds" }
        ]
    },
    {
        id: 7,
        title: "Mobility & Stretching",
        description: "Improve your range of motion and reduce stiffness with this mobility routine.",
        difficulty: "beginner",
        duration: "9 min",
        calories: "80",
        thumbnail: "https://www.trxtraining.com/cdn/shop/articles/man-stretching-hips-against-white-background.jpg",
        videoUrl: "https://www.youtube.com/embed/t2jel6q1GRk?enablejsapi=1",
        instructions: [
            { exercise: "Arm Circles", reps: "10 each direction", rest: "5 seconds" },
            { exercise: "Neck Rotations", reps: "5 each direction", rest: "5 seconds" },
            { exercise: "Hip Circles", reps: "10 each direction", rest: "5 seconds" },
            { exercise: "Ankle Rotations", reps: "10 each direction", rest: "5 seconds" },
            { exercise: "World's Greatest Stretch", reps: "5 each side", rest: "5 seconds" }
        ]
    },
    {
        id: 8,
        title: "Meditation & Breathwork",
        description: "Reduce stress and improve mental clarity with guided breathing exercises.",
        difficulty: "beginner",
        duration: "11 min",
        calories: "50",
        thumbnail: "https://cdn.yogajournal.com/wp-content/uploads/2017/05/man-meditating.jpg",
        videoUrl: "https://www.youtube.com/embed/tybOi4hjZFQ?enablejsapi=1",
        instructions: [
            { exercise: "Deep Breathing", reps: "10 breaths", rest: "0 seconds" },
            { exercise: "4-7-8 Breathing", reps: "5 cycles", rest: "0 seconds" },
            { exercise: "Body Scan", reps: "3 minutes", rest: "0 seconds" },
            { exercise: "Visualization", reps: "3 minutes", rest: "0 seconds" },
            { exercise: "Gratitude Practice", reps: "2 minutes", rest: "0 seconds" }
        ]
    }
];

// Common food items with calories (for calorie tracker)
const commonFoods = [
    { name: "Apple", calories: 95, category: "Fruit", serving: "1 medium", protein: 0.5, carbs: 25, fat: 0.3 },
    { name: "Banana", calories: 105, category: "Fruit", serving: "1 medium", protein: 1.3, carbs: 27, fat: 0.4 },
    { name: "Chicken Breast", calories: 165, category: "Protein", serving: "100g", protein: 31, carbs: 0, fat: 3.6 },
    { name: "Brown Rice", calories: 215, category: "Grain", serving: "1 cup cooked", protein: 5, carbs: 45, fat: 1.8 },
    { name: "Egg", calories: 70, category: "Protein", serving: "1 large", protein: 6, carbs: 0.6, fat: 5 },
    { name: "Salmon", calories: 206, category: "Protein", serving: "100g", protein: 22, carbs: 0, fat: 13 },
    { name: "Broccoli", calories: 55, category: "Vegetable", serving: "1 cup", protein: 3.7, carbs: 11, fat: 0.6 },
    { name: "Avocado", calories: 234, category: "Fruit", serving: "1 medium", protein: 2.9, carbs: 12, fat: 22 },
    { name: "Greek Yogurt", calories: 100, category: "Dairy", serving: "100g", protein: 10, carbs: 4, fat: 5 },
    { name: "Oatmeal", calories: 150, category: "Grain", serving: "1 cup cooked", protein: 6, carbs: 27, fat: 2.5 },
    { name: "Almonds", calories: 164, category: "Nuts", serving: "1/4 cup", protein: 6, carbs: 6, fat: 14 },
    { name: "Sweet Potato", calories: 115, category: "Vegetable", serving: "1 medium", protein: 2, carbs: 27, fat: 0.1 },
    { name: "Spinach", calories: 41, category: "Vegetable", serving: "100g", protein: 5, carbs: 7, fat: 0.5 },
    { name: "Quinoa", calories: 222, category: "Grain", serving: "1 cup cooked", protein: 8, carbs: 39, fat: 3.6 },
    { name: "Cottage Cheese", calories: 206, category: "Dairy", serving: "1 cup", protein: 28, carbs: 8, fat: 9 }
];

// Recipe data for diet section
const recipes = {
    keto: [
        {
            title: "Keto Avocado Eggs",
            ingredients: [
                "2 eggs",
                "1/2 avocado, sliced",
                "Salt and pepper to taste"
            ],
            instructions: "1. Fry eggs to desired doneness.\n2. Plate with sliced avocado and bacon.\n3. Season with salt and pepper.",
            calories: 350,
            protein: 14,
            carbs: 6,
            fat: 30,
            prepTime: "10 min",
            image: "https://images.carbmanager.com/sWoSme3PiirCiFN6WmuRskriyi3mlNsg1mK5SdUkmQ0/resize:fit:1200/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JjNGM5ZTQwLTM5ZmUtYmM2Mi1iNTNhLTY0NWRiMTg2ZTQ0ZC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1mNmE4OWZmZS1hYmUzLTQ5N2QtODc1NS05NTQwM2Q1ZDkxMDM"
        },
        {
            title: "Cauliflower Crust Pizza",
            ingredients: [
                "1 head cauliflower, riced",
                "1 egg",
                "1 cup mozzarella, divided",
                "Pepperoni, bell peppers (toppings)",
                "1/4 cup low-carb marinara"
            ],
            instructions: "1. Rice cauliflower and squeeze out moisture.\n2. Mix with egg and half the cheese to form crust.\n3. Bake until golden, then add toppings and remaining cheese.\n4. Bake until cheese melts.",
            calories: 420,
            protein: 28,
            carbs: 10,
            fat: 32,
            prepTime: "30 min",
            image: "https://hips.hearstapps.com/hmg-prod/images/cauliflower-crust-pizza-index-6778185ec3d1e.jpg"
        }
    ],
    mediterranean: [
        {
            title: "Greek Salad",
            ingredients: [
                "2 cups romaine lettuce, chopped",
                "1 cucumber, diced",
                "1 cup cherry tomatoes, halved",
                "1/2 red onion, thinly sliced",
                "1/2 cup feta cheese, crumbled",
                "1/4 cup kalamata olives",
                "2 tbsp olive oil",
                "1 tbsp lemon juice",
                "1 tsp oregano"
            ],
            instructions: "1. Combine all vegetables in a large bowl.\n2. Whisk together olive oil, lemon juice, and oregano.\n3. Toss salad with dressing.\n4. Top with feta cheese and olives.",
            calories: 320,
            protein: 9,
            carbs: 12,
            fat: 27,
            prepTime: "15 min",
            image: "https://www.simplyrecipes.com/thmb/0NrKQlJ691l6L9tZXpL06uOuWis=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg"
        },
        {
            title: "Grilled Mediterranean Chicken",
            ingredients: [
                "2 chicken breasts",
                "2 tbsp olive oil",
                "2 cloves garlic, minced",
                "1 tbsp lemon juice",
                "1 tsp dried oregano",
                "1 tsp dried basil",
                "Salt and pepper to taste"
            ],
            instructions: "1. Mix olive oil, garlic, lemon juice, and herbs.\n2. Marinate chicken for at least 30 minutes.\n3. Grill chicken until internal temperature reaches 165°F.\n4. Let rest 5 minutes before serving.",
            calories: 380,
            protein: 42,
            carbs: 2,
            fat: 22,
            prepTime: "45 min",
            image: "https://www.realfoodwithsarah.com/wp-content/uploads/2024/05/mediterranean-grilled-chicken.jpg"
        }
    ],
    vegan: [
        {
            title: "Chickpea Buddha Bowl",
            ingredients: [
                "1 cup roasted chickpeas",
                "1 cup cooked quinoa",
                "1 avocado, sliced",
                "1 cup roasted sweet potatoes",
                "2 cups mixed greens",
                "2 tbsp tahini",
                "1 tbsp lemon juice",
                "1 tsp maple syrup"
            ],
            instructions: "1. Arrange quinoa, chickpeas, sweet potatoes, and greens in a bowl.\n2. Top with avocado slices.\n3. Whisk together tahini, lemon juice, and maple syrup.\n4. Drizzle dressing over bowl.",
            calories: 450,
            protein: 14,
            carbs: 55,
            fat: 20,
            prepTime: "25 min",
            image: "https://www.simplyorganic.com/media/wysiwyg/tmp/simply-organic-recipe-roasted-chickpea-buddha-bowls-with-avocado-dressing-finished-1000x1000.jpg"
        },
        {
            title: "Vegan Lentil Soup",
            ingredients: [
                "1 cup dried lentils",
                "1 onion, diced",
                "2 carrots, diced",
                "2 celery stalks, diced",
                "3 cloves garlic, minced",
                "1 can diced tomatoes",
                "4 cups vegetable broth",
                "1 tsp cumin",
                "1 tsp paprika"
            ],
            instructions: "1. Sauté onion, carrots, celery, and garlic until soft.\n2. Add lentils, tomatoes, broth, and spices.\n3. Bring to a boil, then simmer for 25 minutes until lentils are tender.\n4. Season with salt and pepper to taste.",
            calories: 320,
            protein: 16,
            carbs: 52,
            fat: 2,
            prepTime: "40 min",
            image: "https://www.eatingwell.com/thmb/AZdGSagOj8VtZPnpcVdD8ttRk3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-lentil-stew-0b016185b40446ba98409c75dfeaef7f.jpg"
        }
    ]
};

// Quick tips data
const quickTips = [
    "Stay hydrated! Aim to drink at least 8 glasses of water daily.",
    "Consistency is key. Even a 10-minute workout is better than no workout.",
    "Sleep is crucial for recovery. Aim for 7-8 hours each night.",
    "Add protein to every meal to support muscle growth and repair.",
    "Take rest days. Your body needs time to recover and grow stronger.",
    "Simple nutrition rule: eat real food, mostly plants, not too much.",
    "Track your progress, not just your weight. Note how you feel and perform.",
    "Pre-plan your meals for the week to avoid unhealthy last-minute choices.",
    "Focus on compound exercises for maximum efficiency.",
    "Reduce stress with meditation, deep breathing, or yoga.",
    "Small, consistent changes lead to sustainable results.",
    "Remember to warm up before and cool down after your workouts."
];

// Daily meal plan templates
const mealPlans = {
    "lose-weight": {
        calories: 1500,
        breakdown: {
            protein: "40%",
            carbs: "30%",
            fat: "30%"
        },
        meals: [
            {
                title: "Breakfast",
                options: [
                    {
                        name: "Greek Yogurt Parfait",
                        description: "Greek yogurt with berries and a sprinkle of granola",
                        calories: 300,
                        protein: 20,
                        carbs: 30,
                        fat: 8
                    },
                    {
                        name: "Veggie Omelette",
                        description: "2-egg omelette with spinach, tomatoes, and feta cheese",
                        calories: 280,
                        protein: 18,
                        carbs: 8,
                        fat: 18
                    }
                ]
            },
            {
                title: "Lunch",
                options: [
                    {
                        name: "Chicken Salad",
                        description: "Grilled chicken breast with mixed greens and light dressing",
                        calories: 400,
                        protein: 35,
                        carbs: 20,
                        fat: 15
                    },
                    {
                        name: "Lentil Soup",
                        description: "Hearty lentil soup with a side of whole grain bread",
                        calories: 380,
                        protein: 18,
                        carbs: 60,
                        fat: 5
                    }
                ]
            },
            {
                title: "Dinner",
                options: [
                    {
                        name: "Baked Salmon",
                        description: "Baked salmon with roasted vegetables",
                        calories: 450,
                        protein: 35,
                        carbs: 25,
                        fat: 22
                    },
                    {
                        name: "Turkey Stir-Fry",
                        description: "Lean ground turkey stir-fried with vegetables and brown rice",
                        calories: 420,
                        protein: 30,
                        carbs: 40,
                        fat: 14
                    }
                ]
            },
            {
                title: "Snack",
                options: [
                    {
                        name: "Apple with Almond Butter",
                        description: "1 medium apple with 1 tbsp almond butter",
                        calories: 150,
                        protein: 4,
                        carbs: 25,
                        fat: 8
                    },
                    {
                        name: "Protein Shake",
                        description: "Protein powder mixed with water or almond milk",
                        calories: 120,
                        protein: 20,
                        carbs: 5,
                        fat: 1
                    }
                ]
            }
        ]
    },
    "build-muscle": {
        calories: 2800,
        breakdown: {
            protein: "35%",
            carbs: "45%",
            fat: "20%"
        },
        meals: [
            {
                title: "Breakfast",
                options: [
                    {
                        name: "Protein Oatmeal",
                        description: "Oatmeal with protein powder, banana, and peanut butter",
                        calories: 550,
                        protein: 35,
                        carbs: 65,
                        fat: 15
                    },
                    {
                        name: "Egg & Toast Power Breakfast",
                        description: "4 scrambled eggs with 2 slices whole grain toast and avocado",
                        calories: 580,
                        protein: 32,
                        carbs: 40,
                        fat: 28
                    }
                ]
            },
            {
                title: "Lunch",
                options: [
                    {
                        name: "Chicken Rice Bowl",
                        description: "Grilled chicken, brown rice, black beans, and vegetables",
                        calories: 650,
                        protein: 45,
                        carbs: 70,
                        fat: 15
                    },
                    {
                        name: "Turkey Wrap",
                        description: "Whole grain wrap with turkey, cheese, and vegetables",
                        calories: 620,
                        protein: 40,
                        carbs: 65,
                        fat: 20
                    }
                ]
            },
            {
                title: "Dinner",
                options: [
                    {
                        name: "Steak with Sweet Potato",
                        description: "Lean steak with sweet potato and steamed broccoli",
                        calories: 700,
                        protein: 50,
                        carbs: 50,
                        fat: 28
                    },
                    {
                        name: "Salmon Pasta",
                        description: "Whole grain pasta with salmon and vegetables",
                        calories: 680,
                        protein: 42,
                        carbs: 75,
                        fat: 18
                    }
                ]
            },
            {
                title: "Snack 1",
                options: [
                    {
                        name: "Greek Yogurt with Nuts",
                        description: "Greek yogurt with honey and mixed nuts",
                        calories: 300,
                        protein: 20,
                        carbs: 20,
                        fat: 15
                    },
                    {
                        name: "Protein Bar",
                        description: "High-protein bar with low sugar content",
                        calories: 250,
                        protein: 20,
                        carbs: 25,
                        fat: 8
                    }
                ]
            },
            {
                title: "Snack 2",
                options: [
                    {
                        name: "Protein Shake with Banana",
                        description: "Protein powder with milk and banana",
                        calories: 300,
                        protein: 30,
                        carbs: 30,
                        fat: 5
                    },
                    {
                        name: "Cottage Cheese with Fruit",
                        description: "Cottage cheese with pineapple or berries",
                        calories: 280,
                        protein: 25,
                        carbs: 25,
                        fat: 10
                    }
                ]
            }
        ]
    }
};

// ---- Default User Data Factory ----
function getDefaultUserData() {
    return {
        username: "",
        isLoggedIn: false,
        goal: "",
        weight: 0,
        weightUnit: "kg",
        height: 0,
        heightUnit: "cm",
        bmi: 0,
        bmiCategory: "",
        weightHistory: [],
        streak: 0,
        lastLogin: null,
        completedWorkouts: [],
        badges: {
            quickstarter: false,
            onFire: false,
            powerUser: false
        },
        calorieGoal: 2000,
        calorieData: {
            consumed: 0,
            burned: 0
        },
        meals: [],
        mealHistory: {},
        customMealPlan: null,
        lastUpdatedDate: new Date().toISOString().split('T')[0],
        events: [],
        workoutDetection: {
            isActive: false,
            startTime: null,
            duration: 0,
            lastUpdate: null,
            detectedMovements: 0
        },
        uiPreferences: {
            theme: "light",
            animations: true
        }
    };
}

// Initialize with defaults at the top


// Enhanced userData with additional fields
let userData = {
    username: "",
    isLoggedIn: false,
    goal: "",
    weight: 0,
    weightUnit: "kg",
    height: 0,
    heightUnit: "cm",
    bmi: 0,
    bmiCategory: "",
    weightHistory: [],
    streak: 0,
    lastLogin: null,
    completedWorkouts: [],
    badges: {
        quickstarter: false,
        onFire: false,
        powerUser: false
    },
    // Calorie tracking feature
    calorieGoal: 2000,
    calorieData: {
        consumed: 0,
        burned: 0
    },
    meals: [],
    // Meal history for archiving past days
    mealHistory: {},
    // Custom daily meal plan
    customMealPlan: null,
    // Last updated date for calorie reset (YYYY-MM-DD format)
    lastUpdatedDate: new Date().toISOString().split('T')[0],
    // Workout calendar feature
    events: [],
    // Workout detection
    workoutDetection: {
        isActive: false,
        startTime: null,
        duration: 0,
        lastUpdate: null,
        detectedMovements: 0
    },
    // UI preferences
    uiPreferences: {
        theme: "light",
        animations: true
    }
};

// Check login status
function checkLoginStatus() {
    try {
        const storedData = localStorage.getItem('quickFitUserData');
        
        if (storedData) {
            // Try to decode the data first
            let parsedData;
            try {
                const dataString = atob(storedData);
                parsedData = JSON.parse(dataString);
            } catch (e) {
                // For backward compatibility with non-encoded data
                parsedData = JSON.parse(storedData);
            }
            
            userData = parsedData;
            
            if (userData.isLoggedIn) {
                // Check if login was today
                const today = new Date().toDateString();
                const lastLogin = userData.lastLogin ? new Date(userData.lastLogin).toDateString() : null;
                
                if (lastLogin !== today) {
                    // Update streak if consecutive days
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const yesterdayString = yesterday.toDateString();
                    
                    if (lastLogin === yesterdayString) {
                        userData.streak++;
                        
                        // Update streak fire animation based on streak count
                        updateStreakFireAnimation();
                        
                        // Check for Power User badge (10-day streak)
                        if (userData.streak >= 10 && !userData.badges.powerUser) {
                            userData.badges.powerUser = true;
                            
                            // Show badge after dashboard loads
                            setTimeout(() => {
                                showBadgeAchievement('Power User', 'You\'ve logged in for 10 consecutive days!');
                            }, 1000);
                        }
                    } else if (lastLogin !== today) {
                        userData.streak = 1;
                    }
                    
                    // Update last login
                    userData.lastLogin = new Date().toISOString();
                    saveUserData();
                }
                
                // Go straight to dashboard
                showDashboard();
                return;
            }
        }
    } catch (e) {
        console.error("Error parsing stored user data:", e);
        clearUserData();
    }
    
    // Show login screen by default
    showLoginScreen();
}

// Save user data to localStorage
function saveUserData() {
    try {
        if (!userData || typeof userData !== 'object') return;

        // Add last updated date for calorie tracking
        if (!userData.lastUpdatedDate) {
            userData.lastUpdatedDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        }

        // Convert to JSON string
        const dataString = JSON.stringify(userData);

        // Simple encoding (not truly secure but better than plaintext)
        const encodedData = btoa(dataString);

        // ✅ Corrected line
        localStorage.setItem('quickFitUserData', encodedData);
    } catch (e) {
        console.error("Error saving user data:", e);
        // Show error notification to user
        showNotification('Error saving your data. Please try again.', 'error');
    }
}


function loadUserData() {
    try {
        const encodedData = localStorage.getItem('quickFitUserData');
        if (encodedData) {
            const dataString = atob(encodedData);
            const parsedData = JSON.parse(dataString);

            if (parsedData && typeof parsedData === 'object') {
                const defaults = getDefaultUserData();

                userData = {
                    ...defaults,
                    ...parsedData,
                    badges: { ...defaults.badges, ...(parsedData.badges || {}) },
                    calorieData: { ...defaults.calorieData, ...(parsedData.calorieData || {}) },
                    workoutDetection: { ...defaults.workoutDetection, ...(parsedData.workoutDetection || {}) },
                    uiPreferences: { ...defaults.uiPreferences, ...(parsedData.uiPreferences || {}) },
                    weightHistory: parsedData.weightHistory || [],
                    completedWorkouts: parsedData.completedWorkouts || [],
                    meals: parsedData.meals || [],
                    mealHistory: parsedData.mealHistory || {},
                    events: parsedData.events || []
                };

                console.log("User data loaded from localStorage.");
                return true;
            } else {
                console.warn("Invalid data format in storage. Resetting to defaults.");
                userData = getDefaultUserData();
                return false;
            }
        } else {
            console.log("No saved user data found. Using defaults.");
            userData = getDefaultUserData();
            return false;
        }
    } catch (e) {
        console.error("Error loading user data:", e);
        userData = getDefaultUserData();
        return false;
    }
}

// Clear user data
function clearUserData() {
    localStorage.removeItem('quickFitUserData');
    userData = {
        username: "",
        isLoggedIn: false,
        goal: "",
        weight: 0,
        weightUnit: "kg",
        height: 0,
        heightUnit: "cm",
        bmi: 0,
        bmiCategory: "",
        weightHistory: [],
        streak: 0,
        lastLogin: null,
        completedWorkouts: [],
        badges: {
            quickstarter: false,
            onFire: false,
            powerUser: false
        },
        calorieGoal: 2000,
        calorieData: {
            consumed: 0,
            burned: 0
        },
        meals: [],
        mealHistory: {},
        customMealPlan: null,
        lastUpdatedDate: new Date().toISOString().split('T')[0],
        events: [],
        workoutDetection: {
            isActive: false,
            startTime: null,
            duration: 0,
            lastUpdate: null,
            detectedMovements: 0
        },
        uiPreferences: {
            theme: "light",
            animations: true
        }
    };
}

// Show Login Screen
function showLoginScreen() {
    loginScreen.classList.remove('hidden');
    onboardingScreen.classList.add('hidden');
    dashboardScreen.classList.add('hidden');
}

// Show Onboarding Screen
function showOnboarding() {
    loginScreen.classList.add('hidden');
    onboardingScreen.classList.remove('hidden');
    dashboardScreen.classList.add('hidden');
    
    // Update user greeting
    document.getElementById('user-greeting').textContent = userData.username || 'there';
    
    // Show first step
    document.getElementById('goal-selection').classList.remove('hidden');
    document.getElementById('weight-input').classList.add('hidden');
    document.getElementById('height-input').classList.add('hidden');
    document.getElementById('calorie-goal-input').classList.add('hidden');
}

// Show Dashboard Screen
function showDashboard() {
    loginScreen.classList.add('hidden');
    onboardingScreen.classList.add('hidden');
    dashboardScreen.classList.remove('hidden');
    
    // Update user data on dashboard
    updateDashboardData();
    
    // Initialize navigation
    initNavigation();
    
    // Load workouts
    loadWorkoutLibrary();
    
    // Set random daily workout
    setDailyWorkout();

    // Initialize calorie tracker
    initCalorieTracker();
    
    // Initialize calendar
    initCalendar();
    
    // Initialize diet section
    loadDietSection();
    
    // Initialize daily meal plan
    initDailyMealPlan();
    
    // Initialize BMI calculator
    initBMICalculator();
    
    // Initialize weight prediction
    initWeightPrediction();
    
    // Initialize workout detection
    initWorkoutDetection();
    
    // Load random quick tip
    loadRandomQuickTip();
    
    // Initialize streak fire animation
    updateStreakFireAnimation();
    
    // Set current section to home
    navigateToSection('home');
}

// Initialize navigation tabs
function initNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    
    if (navTabs.length === 0) return; // Navigation not yet implemented in HTML
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const sectionId = e.currentTarget.dataset.section;
            navigateToSection(sectionId);
        });
    });
}

// Navigate to specific section
function navigateToSection(sectionId) {
    if (!sectionId) return;
    
    // Update current section
    currentSection = sectionId;
    
    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.dataset.section === sectionId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show current section
    const currentSectionElement = document.getElementById(`${sectionId}-section`);
    if (currentSectionElement) {
        currentSectionElement.classList.remove('hidden');
    }
}

// Load random quick tip
function loadRandomQuickTip() {
    const tipContainer = document.querySelector('.tip-container');
    if (!tipContainer) return;
    
    // Get a random tip
    const randomIndex = Math.floor(Math.random() * quickTips.length);
    const randomTip = quickTips[randomIndex];
    
    // Create tip element
    const tipElement = document.createElement('div');
    tipElement.className = 'tip';
    tipElement.innerHTML = `
        <i class="fas fa-lightbulb"></i>
        <p>${randomTip}</p>
    `;
    
    // Clear existing tips and add new one
    tipContainer.innerHTML = '';
    tipContainer.appendChild(tipElement);
}

// Update dashboard with user data
function updateDashboardData() {
    // Update user name
    const userNameElements = document.querySelectorAll('.user-name-display');
    userNameElements.forEach(el => {
        el.textContent = userData.username || 'Fitness Fan';
    });
    
    document.getElementById('profile-name').textContent = userData.username || 'User';
    
    // Update weight display
    document.getElementById('display-weight').textContent = userData.weight;
    document.getElementById('display-unit').textContent = userData.weightUnit;
    
    // Update goal display
    document.getElementById('display-goal').textContent = 
        userData.goal === 'lose-weight' ? 'Lose Weight' : 'Build Muscle';
    
    // Update streak
    document.getElementById('streak-count').textContent = userData.streak;
    
    // Update weekly progress (simulate based on completed workouts)
    updateWeeklyProgress();
    
    // Update badges
    updateBadgesDisplay();
    
    // Update calorie displays
    updateCalorieDisplays();
    
    // Update upcoming schedule
    updateUpcomingSchedule();
    
    // Update BMI if available
    if (userData.bmi) {
        updateBMIDisplay();
    }
    
    // Update weight prediction
    if (document.getElementById('weight-prediction-container')) {
        updateWeightPrediction();
    }
}

// Update weekly progress
function updateWeeklyProgress() {
    const progressFill = document.getElementById('weekly-progress');
    const progressPercentage = document.querySelector('.progress-percentage');
    
    if (!progressFill || !progressPercentage) return;
    
    // Calculate progress based on completed workouts this week
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Start of week (Sunday)
    startOfWeek.setHours(0, 0, 0, 0);
    
    // Count workouts from this week
    const workoutsThisWeek = userData.completedWorkouts.filter(dateStr => {
        const workoutDate = new Date(dateStr);
        return workoutDate >= startOfWeek;
    }).length;
    
    // Assume goal is 5 workouts per week
    const weeklyGoal = 5;
    let progress = Math.min(100, Math.round((workoutsThisWeek / weeklyGoal) * 100));
    
    // Update UI
    progressFill.style.width = `${progress}%`;
    progressPercentage.textContent = `${progress}%`;
}

// Update streak fire animation
function updateStreakFireAnimation() {
    const streakFire = document.getElementById('streak-fire');
    const streakCount = userData.streak;
    
    if (!streakFire) return;
    
    // Reset classes
    streakFire.className = 'streak-fire';
    
    // Hide fire icon if no streak
    if (streakCount < 2) {
        streakFire.classList.add('hidden');
        return;
    }
    
    // Show fire and add appropriate class based on streak length
    streakFire.classList.remove('hidden');
    
    if (streakCount >= 30) {
        streakFire.classList.add('inferno');
    } else if (streakCount >= 14) {
        streakFire.classList.add('blazing');
    } else if (streakCount >= 7) {
        streakFire.classList.add('hot');
    } else {
        streakFire.classList.add('active');
    }
}

// Update upcoming schedule
function updateUpcomingSchedule() {
    const scheduleList = document.querySelector('.schedule-list');
    if (!scheduleList) return;
    
    // Clear existing schedule
    scheduleList.innerHTML = '';
    
    // Get today and next few days
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);
    
    // Format dates for comparison
    const todayStr = today.toISOString().split('T')[0];
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    const dayAfterTomorrowStr = dayAfterTomorrow.toISOString().split('T')[0];
    
    // Get events for these days
    const todayEvents = userData.events.filter(event => event.date === todayStr && event.type === 'workout');
    const tomorrowEvents = userData.events.filter(event => event.date === tomorrowStr && event.type === 'workout');
    const dayAfterTomorrowEvents = userData.events.filter(event => event.date === dayAfterTomorrowStr && event.type === 'workout');
    
    // Create schedule items
    const scheduleItems = [
        { day: 'Today', events: todayEvents.length > 0 ? todayEvents : [{ title: 'Workout of the Day' }] },
        { day: 'Tomorrow', events: tomorrowEvents.length > 0 ? tomorrowEvents : [{ title: 'Core Strength' }] },
        { day: dayAfterTomorrow.toLocaleDateString('en-US', { weekday: 'long' }), 
          events: dayAfterTomorrowEvents.length > 0 ? dayAfterTomorrowEvents : [{ title: 'Rest Day' }] }
    ];
    
    // Add to schedule list
    scheduleItems.forEach(item => {
        const workout = item.events[0];
        const li = document.createElement('li');
        li.className = 'schedule-item';
        li.innerHTML = `
            <div class="schedule-day">${item.day}</div>
            <div class="schedule-workout">${workout.title}</div>
        `;
        scheduleList.appendChild(li);
    });
}

// Update badges display
function updateBadgesDisplay() {
    // QuickStarter badge
    if (userData.badges.quickstarter) {
        const quickstarterBadge = document.getElementById('quickstarter-badge');
        if (quickstarterBadge) {
            quickstarterBadge.classList.remove('locked');
            const badgeIcon = quickstarterBadge.querySelector('.badge-icon');
            if (badgeIcon) badgeIcon.classList.remove('locked');
        }
    }
    
    // On Fire badge
    if (userData.badges.onFire) {
        const onFireBadge = document.getElementById('on-fire-badge');
        if (onFireBadge) {
            onFireBadge.classList.remove('locked');
            const badgeIcon = onFireBadge.querySelector('.badge-icon');
            if (badgeIcon) badgeIcon.classList.remove('locked');
        }
    }
    
    // Power User badge
    if (userData.badges.powerUser) {
        const powerUserBadge = document.getElementById('power-user-badge');
        if (powerUserBadge) {
            powerUserBadge.classList.remove('locked');
            const badgeIcon = powerUserBadge.querySelector('.badge-icon');
            if (badgeIcon) badgeIcon.classList.remove('locked');
        }
    }
}

// Load workout library
function loadWorkoutLibrary() {
    const workoutGrid = document.getElementById('workout-grid');
    if (!workoutGrid) return;
    
    workoutGrid.innerHTML = '';
    
    // Get the current filter
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
    
    // Filter workouts
    const filteredWorkouts = activeFilter === 'all' 
        ? workouts 
        : workouts.filter(workout => workout.difficulty === activeFilter);
    
    // Create workout cards
    filteredWorkouts.forEach(workout => {
        const workoutCard = createWorkoutCard(workout);
        workoutGrid.appendChild(workoutCard);
    });
}

// Create workout card element
function createWorkoutCard(workout) {
    const card = document.createElement('div');
    card.className = 'workout-card';
    card.dataset.workoutId = workout.id;
    
    card.innerHTML = `
        <div class="workout-thumbnail">
            <img src="${workout.thumbnail}" alt="${workout.title}">
            <div class="workout-difficulty">${workout.difficulty}</div>
        </div>
        <div class="workout-content">
            <h3>${workout.title}</h3>
            <p>${workout.description}</p>
            <div class="workout-meta">
                <span><i class="fas fa-clock"></i> ${workout.duration}</span>
                <span><i class="fas fa-fire"></i> ${workout.calories} calories</span>
            </div>
        </div>
    `;
    
    // Add click event
    card.addEventListener('click', () => {
        showWorkoutDetails(workout);
    });
    
    return card;
}

// Set daily workout
function setDailyWorkout() {
    // Use deterministic selection based on date
    const today = new Date().toDateString();
    const seed = hashString(today);
    const randomIndex = seed % workouts.length;
    const dailyWorkout = workouts[randomIndex];

    const dailyWorkoutTitle = document.getElementById('daily-workout-title');
    const dailyWorkoutDesc = document.getElementById('daily-workout-desc');
    const workoutThumbnail = document.querySelector('.workout-of-day .video-placeholder');
    const instructionsList = document.getElementById('workout-instructions');
    
    if (dailyWorkoutTitle) dailyWorkoutTitle.textContent = dailyWorkout.title;
    if (dailyWorkoutDesc) dailyWorkoutDesc.textContent = dailyWorkout.description;
    if (workoutThumbnail) workoutThumbnail.src = dailyWorkout.thumbnail;
    
    // Update workout instructions if available
    if (instructionsList && dailyWorkout.instructions) {
        instructionsList.innerHTML = '';
        
        dailyWorkout.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.className = 'instruction-item';
            li.innerHTML = `
                <div class="instruction-exercise">${instruction.exercise}</div>
                <div class="instruction-details">
                    <span class="instruction-reps">${instruction.reps}</span>
                    <span class="instruction-rest">Rest: ${instruction.rest}</span>
                </div>
            `;
            instructionsList.appendChild(li);
        });
        
        // Show instructions container
        const instructionsContainer = document.getElementById('workout-instructions-container');
        if (instructionsContainer) {
            instructionsContainer.classList.remove('hidden');
        }
    }

    setupDailyWorkoutClick(dailyWorkout);
}

// Setup daily workout click handlers
function setupDailyWorkoutClick(dailyWorkout) {
    const playButton = document.querySelector('.workout-of-day .play-button');
    if (!playButton) return;
    
    // Remove any existing event listeners
    const newPlayButton = playButton.cloneNode(true);
    playButton.parentNode.replaceChild(newPlayButton, playButton);
    
    // Add new event listener
    newPlayButton.addEventListener('click', () => {
        openVideoModal(dailyWorkout.videoUrl);
    });

    // Complete workout button
    const completeWorkoutBtn = document.getElementById('complete-workout');
    if (completeWorkoutBtn) {
        // Remove any existing event listeners
        const newCompleteBtn = completeWorkoutBtn.cloneNode(true);
        completeWorkoutBtn.parentNode.replaceChild(newCompleteBtn, completeWorkoutBtn);
        
        // Add new event listener
        newCompleteBtn.addEventListener('click', () => {
            completeWorkout(dailyWorkout);
        });
    }
}

// Open video modal - Enhanced for reliable YouTube embedding
function openVideoModal(videoUrl) {
    const modal = document.getElementById('video-modal');
    const frame = document.getElementById('video-frame');
    
    if (!modal || !frame) return;
    
    // Ensure the URL is properly formatted for embedding
    // Extract video ID if it's a YouTube URL
    let embeddedUrl = videoUrl;
    
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        // Extract video ID
        let videoId = '';
        
        if (videoUrl.includes('youtube.com/watch')) {
            const urlParams = new URLSearchParams(new URL(videoUrl).search);
            videoId = urlParams.get('v');
        } else if (videoUrl.includes('youtu.be/')) {
            videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
        } else if (videoUrl.includes('youtube.com/embed/')) {
            videoId = videoUrl.split('youtube.com/embed/')[1].split('?')[0];
        }
        
        if (videoId) {
            // Create proper embedding URL with parameters
            embeddedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
        }
    }
    
    // Set the source and show the modal
    frame.src = embeddedUrl;
    modal.classList.remove('hidden');
    
    // Add event listener to close button if not already added
    const closeBtn = document.getElementById('close-video');
    if (closeBtn) {
        // Remove any existing event listeners
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        // Add new event listener
        newCloseBtn.addEventListener('click', closeVideoModal);
    }
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const frame = document.getElementById('video-frame');
    
    if (!modal || !frame) return;
    
    // Stop video playback by clearing the src
    frame.src = '';
    modal.classList.add('hidden');
}

// Simple string hash function for deterministic random selection
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// Show workout details and video
function showWorkoutDetails(workout) {
    // First, open the video
    openVideoModal(workout.videoUrl);
    
    // Optionally, you can add a workout details panel to the modal
    const detailsContainer = document.getElementById('workout-details-container');
    
    if (detailsContainer) {
        detailsContainer.innerHTML = `
            <h3>${workout.title}</h3>
            <p>${workout.description}</p>
            <div class="workout-meta">
                <span><i class="fas fa-clock"></i> ${workout.duration}</span>
                <span><i class="fas fa-fire"></i> ${workout.calories} calories</span>
                <span><i class="fas fa-dumbbell"></i> ${workout.difficulty}</span>
            </div>
            <div class="workout-instructions">
                <h4>Instructions:</h4>
                <ul>
                    ${workout.instructions ? workout.instructions.map(instr => 
                        `<li>${instr.exercise}: ${instr.reps} (Rest: ${instr.rest})</li>`
                    ).join('') : 'No specific instructions available.'}
                </ul>
            </div>
        `;
        
        detailsContainer.classList.remove('hidden');
    }
}

// Show badge achievement
function showBadgeAchievement(badgeName, description) {
    // Update badge popup content
    document.getElementById('badge-name').textContent = badgeName;
    document.getElementById('badge-description').textContent = description;
    
    // Show badge overlay
    badgeOverlay.classList.remove('hidden');
    
    // Set up close button if not already
    const closeButton = document.getElementById('close-badge');
    if (closeButton) {
        // Remove existing event listener
        const newCloseButton = closeButton.cloneNode(true);
        closeButton.parentNode.replaceChild(newCloseButton, closeButton);
        
        // Add new event listener
        newCloseButton.addEventListener('click', () => {
            badgeOverlay.classList.add('hidden');
        });
    }
}

// Complete workout and possibly award badge
function completeWorkout(workout) {
    // Add current date to completed workouts
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    userData.completedWorkouts.push(today);
    
    // Award QuickStarter badge if first workout
    if (!userData.badges.quickstarter && userData.completedWorkouts.length === 1) {
        userData.badges.quickstarter = true;
        showBadgeAchievement('QuickStarter', 'You completed your first workout!');
    }
    
    // Award On Fire badge for 5 consecutive days with workouts
    if (!userData.badges.onFire && userData.completedWorkouts.length >= 5) {
        // Check if last 5 workouts are on consecutive days
        const lastFiveWorkouts = [...userData.completedWorkouts].sort().slice(-5);
        let consecutive = true;
        
        for (let i = 1; i < lastFiveWorkouts.length; i++) {
            const prevDate = new Date(lastFiveWorkouts[i-1]);
            const currDate = new Date(lastFiveWorkouts[i]);
            const diffDays = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays !== 1) {
                consecutive = false;
                break;
            }
        }
        
        if (consecutive) {
            userData.badges.onFire = true;
            showBadgeAchievement('On Fire', 'You completed 5 workouts in a row!');
        }
    }
    
    // Add burned calories
    const caloriesBurned = parseInt(workout.calories, 10);
    userData.calorieData.burned += caloriesBurned;
    
    // Add workout event to calendar
    addEvent({
        date: today,
        type: 'workout',
        title: workout.title,
        calories: caloriesBurned
    });
    
    // Update streak fire animation
    updateStreakFireAnimation();
    
    // Show notification
    showNotification('Workout completed! Great job!', 'success');
    
    // Save user data
    saveUserData();
    
    // Update dashboard
    updateDashboardData();
    updateCalendar();
}

// Show notification message
function showNotification(message, type = 'info') {
    // Check if notification container exists, create if not
    let notificationContainer = document.getElementById('notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Detect device type
function detectDevice() {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isIPad = isIOS && (/iPad/.test(userAgent) || 
                            (window.screen && window.screen.height / window.screen.width >= 1 && 
                             window.innerWidth > 767));
    const isLandscape = window.innerWidth > window.innerHeight;
    
    document.body.classList.remove('device-iphone', 'device-ipad', 'orientation-landscape');
    
    if (isIPad || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
        document.body.classList.add('device-ipad');
        if (isLandscape) {
            document.body.classList.add('orientation-landscape');
        }
    } else if (isIOS || window.innerWidth < 768) {
        document.body.classList.add('device-iphone');
    }
}

// Toggle theme (dark/light mode)
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    // Update theme icon
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
        themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Save theme preference
    localStorage.setItem('quickFitTheme', isDarkMode ? 'dark' : 'light');
    
    // Update user preferences
    userData.uiPreferences.theme = isDarkMode ? 'dark' : 'light';
    saveUserData();
}

// Load saved theme
function loadTheme() {
    // First check user preferences
    if (userData.uiPreferences && userData.uiPreferences.theme === 'dark') {
        document.body.classList.add('dark-mode');
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
        }
        return;
    }
    
    // Fall back to localStorage for backward compatibility
    const savedTheme = localStorage.getItem('quickFitTheme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
        }
    }
}

// Sanitize user input to prevent XSS
function sanitizeInput(input) {
    if (!input) return '';
    
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// ========================
// CALORIE TRACKER
// ========================

// Initialize calorie tracker
function initCalorieTracker() {
    const calorieCard = document.getElementById('calorie-card');
    
    if (!calorieCard) return; // Exit if calorie card doesn't exist yet
    
    // Check if we need to reset calories for a new day
    checkCalorieReset();
    
    // Set initial values
    updateCalorieDisplays();
    
    // Setup event listeners
    const addMealBtn = document.getElementById('add-meal-btn');
    const addWorkoutCaloriesBtn = document.getElementById('add-workout-calories-btn');
    
    // Remove any existing event listeners
    if (addMealBtn) {
        const newAddMealBtn = addMealBtn.cloneNode(true);
        addMealBtn.parentNode.replaceChild(newAddMealBtn, addMealBtn);
        newAddMealBtn.addEventListener('click', showAddMealForm);
    }
    
    if (addWorkoutCaloriesBtn) {
        const newAddWorkoutBtn = addWorkoutCaloriesBtn.cloneNode(true);
        addWorkoutCaloriesBtn.parentNode.replaceChild(newAddWorkoutBtn, addWorkoutCaloriesBtn);
        newAddWorkoutBtn.addEventListener('click', showAddWorkoutCaloriesForm);
    }
    
    // Meal form event listeners
    const mealForm = document.getElementById('meal-form');
    const closeMealForm = document.getElementById('close-meal-form');
    
    if (mealForm) {
        mealForm.addEventListener('submit', addMeal);
    }
    
    if (closeMealForm) {
        closeMealForm.addEventListener('click', hideAddMealForm);
    }
    
    // Workout calories form event listeners
    const workoutCaloriesForm = document.getElementById('workout-calories-form');
    const closeWorkoutCaloriesForm = document.getElementById('close-workout-calories-form');
    
    if (workoutCaloriesForm) {
        workoutCaloriesForm.addEventListener('submit', addWorkoutCalories);
    }
    
    if (closeWorkoutCaloriesForm) {
        closeWorkoutCaloriesForm.addEventListener('click', hideAddWorkoutCaloriesForm);
    }
    
    // Populate meal log
    updateMealLog();
    
    // Setup search functionality for food items
    setupFoodSearch();
}

// Check for midnight calorie reset
function checkCalorieReset() {
    // Get current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Check if we have a last updated date
    if (!userData.lastUpdatedDate) {
        userData.lastUpdatedDate = currentDate;
        saveUserData();
        return;
    }
    
    // If the current date is different from the last updated date, reset calories
    if (userData.lastUpdatedDate !== currentDate) {
        console.log(`Resetting calories: last updated ${userData.lastUpdatedDate}, current date ${currentDate}`);
        
        // Archive yesterday's meals if needed
        if (userData.mealHistory === undefined) {
            userData.mealHistory = {};
        }
        
        if (userData.meals && userData.meals.length > 0) {
            userData.mealHistory[userData.lastUpdatedDate] = [...userData.meals];
        }
        
        // Reset daily calorie counters
        userData.calorieData.consumed = 0;
        userData.calorieData.burned = 0;
        
        // Clear today's meals
        userData.meals = [];
        
        // Update the last updated date
        userData.lastUpdatedDate = currentDate;
        
        // Save the changes
        saveUserData();
        
        // Show notification to user
        showNotification('Daily calorie counters have been reset for a new day!', 'info');
    }
}

// Update calorie displays
function updateCalorieDisplays() {
    const caloriesConsumed = document.getElementById('calories-consumed');
    const caloriesBurned = document.getElementById('calories-burned');
    const caloriesRemaining = document.getElementById('calories-remaining');
    
    if (!caloriesConsumed || !caloriesBurned || !caloriesRemaining) return;
    
    // Check for calorie reset before displaying
    checkCalorieReset();
    
    // Update calorie values
    caloriesConsumed.textContent = userData.calorieData.consumed;
    caloriesBurned.textContent = userData.calorieData.burned;
    
    // Calculate remaining calories
    const remaining = userData.calorieGoal - userData.calorieData.consumed + userData.calorieData.burned;
    caloriesRemaining.textContent = remaining;
    
    // Update progress circles
    updateCalorieProgressCircles();
    
    // Update calorie log
    updateMealLog();
}

// Update calorie progress circles
function updateCalorieProgressCircles() {
    const consumedCircle = document.getElementById('consumed-circle');
    const burnedCircle = document.getElementById('burned-circle');
    const remainingCircle = document.getElementById('remaining-circle');
    
    if (!consumedCircle || !burnedCircle || !remainingCircle) return;
    
    const consumedPercent = Math.min(100, (userData.calorieData.consumed / userData.calorieGoal) * 100);
    const burnedPercent = Math.min(100, (userData.calorieData.burned / (userData.calorieGoal * 0.3)) * 100);
    const remainingPercent = Math.min(100, ((userData.calorieGoal - userData.calorieData.consumed + userData.calorieData.burned) / userData.calorieGoal) * 100);
    
    // Update SVG circles (circumference of circle with r=40 is approx 251.2)
    consumedCircle.style.strokeDasharray = `${consumedPercent * 2.51} 1000`;
    burnedCircle.style.strokeDasharray = `${burnedPercent * 2.51} 1000`;
    remainingCircle.style.strokeDasharray = `${remainingPercent * 2.51} 1000`;
}

// Show add meal form
function showAddMealForm() {
    const mealFormContainer = document.getElementById('meal-form-container');
    if (mealFormContainer) {
        mealFormContainer.classList.remove('hidden');
    }
}

// Hide add meal form
function hideAddMealForm() {
    const mealFormContainer = document.getElementById('meal-form-container');
    const mealForm = document.getElementById('meal-form');
    const foodSuggestions = document.getElementById('food-suggestions');
    
    if (mealFormContainer) {
        mealFormContainer.classList.add('hidden');
    }
    
    if (mealForm) {
        mealForm.reset();
    }
    
    if (foodSuggestions) {
        foodSuggestions.innerHTML = '';
    }
}

// Show add workout calories form
function showAddWorkoutCaloriesForm() {
    const formContainer = document.getElementById('workout-calories-form-container');
    if (formContainer) {
        formContainer.classList.remove('hidden');
    }
}

// Hide add workout calories form
function hideAddWorkoutCaloriesForm() {
    const formContainer = document.getElementById('workout-calories-form-container');
    const form = document.getElementById('workout-calories-form');
    
    if (formContainer) {
        formContainer.classList.add('hidden');
    }
    
    if (form) {
        form.reset();
    }
}

// Setup food search functionality
function setupFoodSearch() {
    const foodSearchInput = document.getElementById('food-search');
    const foodSuggestions = document.getElementById('food-suggestions');
    
    if (!foodSearchInput || !foodSuggestions) return;
    
    // Clean up old event listeners
    const newInput = foodSearchInput.cloneNode(true);
    foodSearchInput.parentNode.replaceChild(newInput, foodSearchInput);
    
    // Add new event listener
    newInput.addEventListener('input', () => {
        const searchTerm = newInput.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            foodSuggestions.innerHTML = '';
            return;
        }
        
        // Filter food items
        const filteredFoods = commonFoods.filter(food => 
            food.name.toLowerCase().includes(searchTerm) || 
            food.category.toLowerCase().includes(searchTerm)
        );
        
        // Display suggestions
        foodSuggestions.innerHTML = '';
        
        filteredFoods.forEach(food => {
            const suggestion = document.createElement('div');
            suggestion.className = 'food-suggestion';
            suggestion.innerHTML = `
                <div class="food-suggestion-name">${food.name}</div>
                <div class="food-suggestion-details">
                    <span>${food.calories} cal</span>
                    <span>${food.serving}</span>
                </div>
            `;
            
            suggestion.addEventListener('click', () => {
                // Fill form with selected food
                document.getElementById('meal-name').value = food.name;
                document.getElementById('meal-calories').value = food.calories;
                document.getElementById('meal-serving').value = food.serving;
                
                // Clear suggestions
                foodSuggestions.innerHTML = '';
            });
            
            foodSuggestions.appendChild(suggestion);
        });
    });
}

// Add meal to log
function addMeal(event) {
    event.preventDefault();
    
    const mealNameInput = document.getElementById('meal-name');
    const mealCaloriesInput = document.getElementById('meal-calories');
    const mealServingInput = document.getElementById('meal-serving');
    const mealTimeSelect = document.getElementById('meal-time');
    
    if (!mealNameInput || !mealCaloriesInput || !mealServingInput || !mealTimeSelect) return;
    
    const mealName = sanitizeInput(mealNameInput.value.trim());
    const mealCalories = parseInt(mealCaloriesInput.value, 10);
    const mealServing = sanitizeInput(mealServingInput.value.trim());
    const mealTime = mealTimeSelect.value;
    
    // Validate inputs
    if (!mealName) {
        showNotification('Please enter a meal name', 'error');
        return;
    }
    
    if (isNaN(mealCalories) || mealCalories <= 0) {
        showNotification('Please enter valid calories', 'error');
        return;
    }
    
    // Create meal object
    const meal = {
        id: Date.now(),
        name: mealName,
        calories: mealCalories,
        serving: mealServing,
        time: mealTime,
        date: new Date().toISOString()
    };
    
    // Add to user data
    userData.meals.push(meal);
    userData.calorieData.consumed += mealCalories;
    
    // Add cheat meal event if calories > 600
    if (mealCalories > 600) {
        addEvent({
            date: new Date().toISOString().split('T')[0],
            type: 'cheat',
            title: mealName,
            calories: mealCalories
        });
        updateCalendar();
    }
    
    // Save and update
    saveUserData();
    updateCalorieDisplays();
    
    // Hide form
    hideAddMealForm();
    
    // Show notification
    showNotification(`Added ${mealName} to your meal log`, 'success');
}

// Add workout calories
function addWorkoutCalories(event) {
    event.preventDefault();
    
    const workoutNameInput = document.getElementById('workout-name');
    const caloriesBurnedInput = document.getElementById('calories-burned-input');
    
    if (!workoutNameInput || !caloriesBurnedInput) return;
    
    const workoutName = sanitizeInput(workoutNameInput.value.trim());
    const caloriesBurned = parseInt(caloriesBurnedInput.value, 10);
    
    // Validate inputs
    if (!workoutName) {
        showNotification('Please enter a workout name', 'error');
        return;
    }
    
    if (isNaN(caloriesBurned) || caloriesBurned <= 0) {
        showNotification('Please enter valid calories', 'error');
        return;
    }
    
    // Add to user data
    userData.calorieData.burned += caloriesBurned;
    
    // Add workout event to calendar
    addEvent({
        date: new Date().toISOString().split('T')[0],
        type: 'workout',
        title: workoutName,
        calories: caloriesBurned
    });
    
    // Save and update
    saveUserData();
    updateCalorieDisplays();
    updateCalendar();
    
    // Hide form
    hideAddWorkoutCaloriesForm();
    
    // Show notification
    showNotification(`Added ${caloriesBurned} calories burned from ${workoutName}`, 'success');
}

// Update meal log
function updateMealLog() {
    const mealLog = document.getElementById('meal-log');
    if (!mealLog) return;
    
    mealLog.innerHTML = '';
    
    // Sort meals by date (newest first)
    const sortedMeals = [...userData.meals].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Get today's meals
    const today = new Date().toDateString();
    const todayMeals = sortedMeals.filter(meal => new Date(meal.date).toDateString() === today);
    
    if (todayMeals.length === 0) {
        mealLog.innerHTML = '<div class="empty-state">No meals logged today. Add your first meal!</div>';
        return;
    }
    
    // Group meals by time
    const groupedMeals = {
        breakfast: todayMeals.filter(meal => meal.time === 'breakfast'),
        lunch: todayMeals.filter(meal => meal.time === 'lunch'),
        dinner: todayMeals.filter(meal => meal.time === 'dinner'),
        snack: todayMeals.filter(meal => meal.time === 'snack')
    };
    
    // Create meal log entries by time
    for (const [time, meals] of Object.entries(groupedMeals)) {
        if (meals.length > 0) {
            const timeHeading = document.createElement('div');
            timeHeading.className = 'meal-time-heading';
            timeHeading.textContent = time.charAt(0).toUpperCase() + time.slice(1);
            mealLog.appendChild(timeHeading);
            
            meals.forEach(meal => {
                const mealEntry = document.createElement('div');
                mealEntry.className = 'meal-entry';
                mealEntry.innerHTML = `
                    <div class="meal-entry-details">
                        <div class="meal-entry-name">${meal.name}</div>
                        <div class="meal-entry-serving">${meal.serving}</div>
                    </div>
                    <div class="meal-entry-calories">${meal.calories} cal</div>
                    <button class="delete-meal-btn" data-meal-id="${meal.id}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                mealLog.appendChild(mealEntry);
            });
        }
    }
    
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-meal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mealId = parseInt(e.currentTarget.dataset.mealId, 10);
            deleteMeal(mealId);
        });
    });
}

// Delete meal
function deleteMeal(mealId) {
    const mealIndex = userData.meals.findIndex(meal => meal.id === mealId);
    
    if (mealIndex !== -1) {
        // Subtract calories
        userData.calorieData.consumed -= userData.meals[mealIndex].calories;
        
        // Remove meal
        userData.meals.splice(mealIndex, 1);
        
        // Save and update
        saveUserData();
        updateCalorieDisplays();
        
        // Show notification
        showNotification('Meal deleted', 'info');
    }
}

// ========================
// WORKOUT + MEAL CALENDAR
// ========================

// Global variables for calendar
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDate = null;

// Initialize calendar
function initCalendar() {
    const calendarContainer = document.getElementById('calendar-container');
    if (!calendarContainer) return;
    
    renderCalendar();
    
    // Set up event listeners
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    if (prevMonthBtn) {
        // Remove existing listeners
        const newPrevBtn = prevMonthBtn.cloneNode(true);
        prevMonthBtn.parentNode.replaceChild(newPrevBtn, prevMonthBtn);
        
        // Add new listener
        newPrevBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });
    }
    
    if (nextMonthBtn) {
        // Remove existing listeners
        const newNextBtn = nextMonthBtn.cloneNode(true);
        nextMonthBtn.parentNode.replaceChild(newNextBtn, nextMonthBtn);
        
        // Add new listener
        newNextBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });
    }
    
    // Event form handlers
    const addEventBtn = document.getElementById('add-event-btn');
    const closeEventFormBtn = document.getElementById('close-event-form');
    const eventForm = document.getElementById('event-form');
    const closeEventSidebarBtn = document.getElementById('close-event-sidebar');
    
    if (addEventBtn) {
        // Remove existing listeners
        const newAddEventBtn = addEventBtn.cloneNode(true);
        addEventBtn.parentNode.replaceChild(newAddEventBtn, addEventBtn);
        
        // Add new listener
        newAddEventBtn.addEventListener('click', showAddEventForm);
    }
    
    if (closeEventFormBtn) {
        closeEventFormBtn.addEventListener('click', hideAddEventForm);
    }
    
    if (eventForm) {
        eventForm.addEventListener('submit', addCustomEvent);
    }
    
    if (closeEventSidebarBtn) {
        closeEventSidebarBtn.addEventListener('click', hideEventSidebar);
    }
}

// Render calendar
function renderCalendar() {
    const calendarDays = document.getElementById('calendar-days');
    const monthYear = document.getElementById('month-year');
    
    if (!calendarDays || !monthYear) return;
    
    // Clear previous calendar
    calendarDays.innerHTML = '';
    
    // Set month and year
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    monthYear.textContent = `${months[currentMonth]} ${currentYear}`;
    
    // Get first day of month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    
    // Get number of days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Create empty cells for days before first day of month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        calendarDays.appendChild(emptyCell);
    }
    
    // Create cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        
        // Create date string for comparison
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Check if there are events on this day
        const dayEvents = userData.events.filter(event => event.date === dateStr);
        
        // Add day number
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = day;
        cell.appendChild(dayNumber);
        
        // Add event markers
        if (dayEvents.length > 0) {
            const eventMarkers = document.createElement('div');
            eventMarkers.className = 'event-markers';
            
            // Group events by type
            const hasWorkout = dayEvents.some(event => event.type === 'workout');
            const hasCheat = dayEvents.some(event => event.type === 'cheat');
            const hasCustom = dayEvents.some(event => event.type === 'custom');
            
            if (hasWorkout) {
                const workoutMarker = document.createElement('div');
                workoutMarker.className = 'event-marker workout';
                workoutMarker.title = 'Workout';
                eventMarkers.appendChild(workoutMarker);
            }
            
            if (hasCheat) {
                const cheatMarker = document.createElement('div');
                cheatMarker.className = 'event-marker cheat';
                cheatMarker.title = 'Cheat Meal';
                eventMarkers.appendChild(cheatMarker);
            }
            
            if (hasCustom) {
                const customMarker = document.createElement('div');
                customMarker.className = 'event-marker custom';
                customMarker.title = 'Custom Event';
                eventMarkers.appendChild(customMarker);
            }
            
            cell.appendChild(eventMarkers);
        }
        
        // Highlight today
        const today = new Date();
        if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            cell.classList.add('today');
        }
        
        // Add click event
        cell.addEventListener('click', () => {
            selectDate(dateStr);
        });
        
        calendarDays.appendChild(cell);
    }
}

// Select a date on the calendar
function selectDate(dateStr) {
    selectedDate = dateStr;
    
    // Show event sidebar
    const eventSidebar = document.getElementById('event-sidebar');
    if (eventSidebar) {
        eventSidebar.classList.remove('hidden');
    }
    
    // Update sidebar with events for selected date
    updateEventSidebar(dateStr);
}

// Update event sidebar
function updateEventSidebar(dateStr) {
    const eventList = document.getElementById('event-list');
    const selectedDateElement = document.getElementById('selected-date');
    
    if (!eventList || !selectedDateElement) return;
    
    // Format date for display
    const date = new Date(dateStr + 'T00:00:00');
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    selectedDateElement.textContent = formattedDate;
    
    // Get events for selected date
    const dayEvents = userData.events.filter(event => event.date === dateStr);
    
    // Clear previous events
    eventList.innerHTML = '';
    
    if (dayEvents.length === 0) {
        eventList.innerHTML = '<div class="empty-state">No events for this day.</div>';
        return;
    }
    
    // Add events to sidebar
    dayEvents.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = `event-item ${event.type}`;
        
        // Create event icon based on type
        let typeIcon = '';
        switch (event.type) {
            case 'workout':
                typeIcon = '<i class="fas fa-dumbbell"></i>';
                break;
            case 'cheat':
                typeIcon = '<i class="fas fa-utensils"></i>';
                break;
            case 'custom':
                typeIcon = '<i class="fas fa-calendar-day"></i>';
                break;
        }
        
        eventItem.innerHTML = `
            <div class="event-type-icon">${typeIcon}</div>
            <div class="event-details">
                <div class="event-title">${event.title}</div>
                ${event.calories ? `<div class="event-calories">${event.calories} calories</div>` : ''}
                ${event.notes ? `<div class="event-notes">${event.notes}</div>` : ''}
            </div>
            <button class="delete-event-btn" data-event-id="${event.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        eventList.appendChild(eventItem);
    });
    
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-event-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const eventId = parseInt(e.currentTarget.dataset.eventId, 10);
            deleteEvent(eventId);
        });
    });
}

// Show add event form
function showAddEventForm() {
    const eventFormContainer = document.getElementById('event-form-container');
    if (!eventFormContainer) return;
    
    eventFormContainer.classList.remove('hidden');
    
    // Set date in form if a date is selected
    const eventDateInput = document.getElementById('event-date');
    if (!eventDateInput) return;
    
    if (selectedDate) {
        eventDateInput.value = selectedDate;
    } else {
        // Default to today
        const today = new Date().toISOString().split('T')[0];
        eventDateInput.value = today;
    }
}

// Hide add event form
function hideAddEventForm() {
    const eventFormContainer = document.getElementById('event-form-container');
    const eventForm = document.getElementById('event-form');
    
    if (eventFormContainer) {
        eventFormContainer.classList.add('hidden');
    }
    
    if (eventForm) {
        eventForm.reset();
    }
}

// Add custom event
function addCustomEvent(event) {
    event.preventDefault();
    
    const eventDateInput = document.getElementById('event-date');
    const eventTitleInput = document.getElementById('event-title');
    const eventTypeSelect = document.getElementById('event-type');
    const eventCaloriesInput = document.getElementById('event-calories');
    const eventNotesInput = document.getElementById('event-notes');
    
    if (!eventDateInput || !eventTitleInput || !eventTypeSelect) return;
    
    const eventDate = eventDateInput.value;
    const eventTitle = sanitizeInput(eventTitleInput.value.trim());
    const eventType = eventTypeSelect.value;
    const eventCalories = parseInt(eventCaloriesInput.value, 10) || 0;
    const eventNotes = sanitizeInput(eventNotesInput.value.trim());
    
    // Validate inputs
    if (!eventDate) {
        showNotification('Please select a date', 'error');
        return;
    }
    
    if (!eventTitle) {
        showNotification('Please enter an event title', 'error');
        return;
    }
    
    // Create event object
    const newEvent = {
        id: Date.now(),
        date: eventDate,
        type: eventType,
        title: eventTitle,
        calories: eventCalories,
        notes: eventNotes
    };
    
    // Add event to user data
    addEvent(newEvent);
    
    // Update calorie data if needed
    if (eventType === 'workout' && eventCalories > 0) {
        userData.calorieData.burned += eventCalories;
    } else if (eventType === 'cheat' && eventCalories > 0) {
        userData.calorieData.consumed += eventCalories;
    }
    
    // Save and update
    saveUserData();
    updateCalorieDisplays();
    
    // Hide form and update calendar
    hideAddEventForm();
    renderCalendar();
    
    // Update event sidebar if a date is selected
    if (selectedDate) {
        updateEventSidebar(selectedDate);
    }
    
    // Show notification
    showNotification('Event added successfully', 'success');
}

// Add event to user data
function addEvent(event) {
    if (!userData.events) {
        userData.events = [];
    }
    
    userData.events.push({
        id: event.id || Date.now(),
        date: event.date,
        type: event.type,
        title: event.title,
        calories: event.calories || 0,
        notes: event.notes || ''
    });
    
    saveUserData();
}

// Delete event
function deleteEvent(eventId) {
    const eventIndex = userData.events.findIndex(event => event.id === eventId);
    
    if (eventIndex !== -1) {
        const event = userData.events[eventIndex];
        
        // Update calorie data if needed
        if (event.type === 'workout' && event.calories > 0) {
            userData.calorieData.burned -= event.calories;
        } else if (event.type === 'cheat' && event.calories > 0) {
            userData.calorieData.consumed -= event.calories;
        }
        
        // Remove event
        userData.events.splice(eventIndex, 1);
        
        // Save and update
        saveUserData();
        updateCalorieDisplays();
        renderCalendar();
        
        // Update event sidebar
        if (selectedDate) {
            updateEventSidebar(selectedDate);
        }
        
        // Show notification
        showNotification('Event deleted', 'info');
    }
}

// Update calendar display
function updateCalendar() {
    if (document.getElementById('calendar-container')) {
        renderCalendar();
    }
}

// Hide event sidebar
function hideEventSidebar() {
    const eventSidebar = document.getElementById('event-sidebar');
    if (eventSidebar) {
        eventSidebar.classList.add('hidden');
    }
    selectedDate = null;
}

// ========================
// DAILY MEAL PLAN
// ========================

// Initialize daily meal plan
function initDailyMealPlan() {
    const mealPlanContainer = document.getElementById('meal-plan-container');
    if (!mealPlanContainer) return;
    
    // Check if user has a custom meal plan
    if (!userData.customMealPlan) {
        // Create default plan based on user's goal
        createDefaultMealPlan();
    }
    
    // Update UI
    updateMealPlanDisplay();
    
    // Set up event listeners
    const customizeMealPlanBtn = document.getElementById('customize-meal-plan');
    if (customizeMealPlanBtn) {
        customizeMealPlanBtn.addEventListener('click', showCustomizeMealPlanForm);
    }
}

// Create default meal plan based on user's goal
function createDefaultMealPlan() {
    const goal = userData.goal || 'lose-weight';
    
    // Clone the default plan from templates
    userData.customMealPlan = JSON.parse(JSON.stringify(mealPlans[goal]));
    
    // Add user's personal calories based on weight if not set
    if (!userData.calorieGoal) {
        if (userData.weightUnit === 'kg') {
            userData.calorieGoal = Math.round(userData.weight * 24);
        } else {
            // Convert lbs to kg, then calculate
            userData.calorieGoal = Math.round((userData.weight / 2.2) * 24);
        }
    }
    
    // Adjust meal plan calories to match user's goal
    adjustMealPlanCalories();
    
    saveUserData();
}

// Adjust meal plan calories to match user's goal
function adjustMealPlanCalories() {
    if (!userData.customMealPlan) return;
    
    const calorieRatio = userData.calorieGoal / userData.customMealPlan.calories;
    
    // Update plan calories
    userData.customMealPlan.calories = userData.calorieGoal;
    
    // Adjust all meal calories proportionally
    userData.customMealPlan.meals.forEach(meal => {
        meal.options.forEach(option => {
            option.calories = Math.round(option.calories * calorieRatio);
            option.protein = Math.round(option.protein * calorieRatio);
            option.carbs = Math.round(option.carbs * calorieRatio);
            option.fat = Math.round(option.fat * calorieRatio);
        });
    });
}

// Update meal plan display
function updateMealPlanDisplay() {
    const mealPlanContainer = document.getElementById('meal-plan-container');
    if (!mealPlanContainer || !userData.customMealPlan) return;
    
    // Set total calories and macros
    const totalCalories = document.getElementById('meal-plan-calories');
    const macroBreakdown = document.getElementById('macro-breakdown');
    
    if (totalCalories) {
        totalCalories.textContent = userData.customMealPlan.calories;
    }
    
    if (macroBreakdown) {
        macroBreakdown.innerHTML = `
            <span>Protein: ${userData.customMealPlan.breakdown.protein}</span> | 
            <span>Carbs: ${userData.customMealPlan.breakdown.carbs}</span| 
            <span>Fat: ${userData.customMealPlan.breakdown.fat}</span>
        `;
    }
    
    // Clear and rebuild the meal list
    const mealsList = document.getElementById('daily-meals-list');
    if (!mealsList) return;
    
    mealsList.innerHTML = '';
    
    // Add each meal to the list
    userData.customMealPlan.meals.forEach(meal => {
        const mealSection = document.createElement('div');
        mealSection.className = 'meal-section';
        
        // Get the currently selected option (default to first)
        const selectedOption = meal.options[0];
        
        mealSection.innerHTML = `
            <div class="meal-header">
                <h3>${meal.title}</h3>
                <button class="meal-option-btn" data-meal="${meal.title}">
                    <i class="fas fa-exchange-alt"></i> Change
                </button>
            </div>
            <div class="meal-option">
                <div class="meal-option-name">${selectedOption.name}</div>
                <div class="meal-option-desc">${selectedOption.description}</div>
                <div class="meal-option-macros">
                    <span>${selectedOption.calories} calories</span> | 
                    <span>${selectedOption.protein}g protein</span> | 
                    <span>${selectedOption.carbs}g carbs</span> | 
                    <span>${selectedOption.fat}g fat</span>
                </div>
            </div>
        `;
        
        mealsList.appendChild(mealSection);
    });
    
    // Add event listeners to change buttons
    document.querySelectorAll('.meal-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mealTitle = e.currentTarget.dataset.meal;
            showMealOptionsModal(mealTitle);
        });
    });
}

// Show meal options modal
function showMealOptionsModal(mealTitle) {
    // Check if modal exists, create if not
    let mealOptionsModal = document.getElementById('meal-options-modal');
    
    if (!mealOptionsModal) {
        mealOptionsModal = document.createElement('div');
        mealOptionsModal.id = 'meal-options-modal';
        mealOptionsModal.className = 'modal-container';
        
        document.body.appendChild(mealOptionsModal);
    }
    
    // Find the meal in the plan
    const meal = userData.customMealPlan.meals.find(m => m.title === mealTitle);
    
    if (!meal) return;
    
    // Create modal content
    mealOptionsModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Options for ${mealTitle}</h3>
                <button id="close-meal-options" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${meal.options.map((option, index) => `
                    <div class="meal-option-selection" data-index="${index}">
                        <div class="meal-option-name">${option.name}</div>
                        <div class="meal-option-desc">${option.description}</div>
                        <div class="meal-option-macros">
                            <span>${option.calories} calories</span> | 
                            <span>${option.protein}g protein</span> | 
                            <span>${option.carbs}g carbs</span> | 
                            <span>${option.fat}g fat</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Show the modal
    mealOptionsModal.classList.remove('hidden');
    
    // Add event listeners
    const closeBtn = document.getElementById('close-meal-options');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mealOptionsModal.classList.add('hidden');
        });
    }
    
    // Add click event to options
    document.querySelectorAll('.meal-option-selection').forEach(option => {
        option.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index, 10);
            
            // Update the selected option (future implementation would save this)
            showNotification(`Meal option updated for ${mealTitle}`, 'success');
            
            // Close the modal
            mealOptionsModal.classList.add('hidden');
            
            // Update display
            updateMealPlanDisplay();
        });
    });
}

// Show customize meal plan form
function showCustomizeMealPlanForm() {
    // Check if modal exists, create if not
    let customizeMealPlanModal = document.getElementById('customize-meal-plan-modal');
    
    if (!customizeMealPlanModal) {
        customizeMealPlanModal = document.createElement('div');
        customizeMealPlanModal.id = 'customize-meal-plan-modal';
        customizeMealPlanModal.className = 'modal-container';
        
        document.body.appendChild(customizeMealPlanModal);
    }
    
    // Create modal content
    customizeMealPlanModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Customize Meal Plan</h3>
                <button id="close-customize-plan" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form id="customize-plan-form" class="form">
                <div class="form-group">
                    <label for="custom-calories">Daily Calories:</label>
                    <input type="number" id="custom-calories" min="1200" max="4000" value="${userData.customMealPlan?.calories || 2000}" required>
                </div>
                <div class="form-group">
                    <label>Macro Breakdown:</label>
                    <div class="macro-sliders">
                        <div class="macro-slider">
                            <label for="protein-percent">Protein: <span id="protein-percent-display">${userData.customMealPlan?.breakdown.protein || '30%'}</span></label>
                            <input type="range" id="protein-percent" min="10" max="60" value="${parseInt(userData.customMealPlan?.breakdown.protein || '30%')}" class="slider">
                        </div>
                        <div class="macro-slider">
                            <label for="carbs-percent">Carbs: <span id="carbs-percent-display">${userData.customMealPlan?.breakdown.carbs || '40%'}</span></label>
                            <input type="range" id="carbs-percent" min="10" max="60" value="${parseInt(userData.customMealPlan?.breakdown.carbs || '40%')}" class="slider">
                        </div>
                        <div class="macro-slider">
                            <label for="fat-percent">Fat: <span id="fat-percent-display">${userData.customMealPlan?.breakdown.fat || '30%'}</span></label>
                            <input type="range" id="fat-percent" min="10" max="60" value="${parseInt(userData.customMealPlan?.breakdown.fat || '30%')}" class="slider">
                        </div>
                    </div>
                    <div id="macro-validation-message" class="validation-message"></div>
                </div>
                <button type="submit" class="primary-btn full-width">Update Meal Plan</button>
            </form>
        </div>
    `;
    
    // Show the modal
    customizeMealPlanModal.classList.remove('hidden');
    
    // Add event listeners
    const closeBtn = document.getElementById('close-customize-plan');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            customizeMealPlanModal.classList.add('hidden');
        });
    }
    
    // Setup macro sliders
    const proteinSlider = document.getElementById('protein-percent');
    const carbsSlider = document.getElementById('carbs-percent');
    const fatSlider = document.getElementById('fat-percent');
    
    const proteinDisplay = document.getElementById('protein-percent-display');
    const carbsDisplay = document.getElementById('carbs-percent-display');
    const fatDisplay = document.getElementById('fat-percent-display');
    
    const validationMessage = document.getElementById('macro-validation-message');
    
    // Add input event listeners to update displays
    [proteinSlider, carbsSlider, fatSlider].forEach(slider => {
        slider.addEventListener('input', updateMacroDisplays);
    });
    
    function updateMacroDisplays() {
        const protein = parseInt(proteinSlider.value);
        const carbs = parseInt(carbsSlider.value);
        const fat = parseInt(fatSlider.value);
        
        proteinDisplay.textContent = `${protein}%`;
        carbsDisplay.textContent = `${carbs}%`;
        fatDisplay.textContent = `${fat}%`;
        
        // Validate total is 100%
        const total = protein + carbs + fat;
        
        if (total !== 100) {
            validationMessage.textContent = `Total should be 100%. Current: ${total}%`;
            validationMessage.classList.add('error');
        } else {
            validationMessage.textContent = "Macros balanced at 100%";
            validationMessage.classList.remove('error');
        }
    }
    
    // Form submission
    const customizeForm = document.getElementById('customize-plan-form');
    if (customizeForm) {
        customizeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const calories = parseInt(document.getElementById('custom-calories').value);
            const protein = parseInt(proteinSlider.value);
            const carbs = parseInt(carbsSlider.value);
            const fat = parseInt(fatSlider.value);
            
            // Validate macros add up to 100%
            if (protein + carbs + fat !== 100) {
                validationMessage.textContent = "Please adjust macros to total 100%";
                validationMessage.classList.add('error');
                return;
            }
            
            // Update user data
            userData.calorieGoal = calories;
            
            // Update meal plan
            if (!userData.customMealPlan) {
                createDefaultMealPlan();
            } else {
                userData.customMealPlan.calories = calories;
                userData.customMealPlan.breakdown = {
                    protein: `${protein}%`,
                    carbs: `${carbs}%`,
                    fat: `${fat}%`
                };
                
                // Adjust meal calories based on new goals
                adjustMealPlanCalories();
            }
            
            // Save changes
            saveUserData();
            
            // Update UI
            updateMealPlanDisplay();
            updateCalorieDisplays();
            
            // Close modal
            customizeMealPlanModal.classList.add('hidden');
            
            // Show notification
            showNotification('Meal plan updated successfully', 'success');
        });
    }
    
    // Initialize displays
    updateMacroDisplays();
}

// ========================
// BMI CALCULATOR
// ========================

// Initialize BMI calculator
function initBMICalculator() {
    const bmiContainer = document.getElementById('bmi-calculator-container');
    if (!bmiContainer) return;
    
    // Calculate BMI if height and weight are available
    if (userData.height && userData.weight) {
        calculateBMI();
    }
    
    // Add event listeners
    const calculateBmiBtn = document.getElementById('calculate-bmi-btn');
    if (calculateBmiBtn) {
        calculateBmiBtn.addEventListener('click', showBmiCalculatorForm);
    }
    
    // Update BMI display
    updateBMIDisplay();
}

// Show BMI calculator form
function showBmiCalculatorForm() {
    // Check if modal exists, create if not
    let bmiModal = document.getElementById('bmi-calculator-modal');
    
    if (!bmiModal) {
        bmiModal = document.createElement('div');
        bmiModal.id = 'bmi-calculator-modal';
        bmiModal.className = 'modal-container';
        
        document.body.appendChild(bmiModal);
    }
    
    // Create modal content
    bmiModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>BMI Calculator</h3>
                <button id="close-bmi-calculator" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form id="bmi-calculator-form" class="form">
                <div class="form-group">
                    <label for="bmi-weight">Weight:</label>
                    <div class="input-with-unit">
                        <input type="number" id="bmi-weight" min="1" step="0.1" value="${userData.weight || ''}" required>
                        <select id="bmi-weight-unit">
                            <option value="kg" ${userData.weightUnit === 'kg' ? 'selected' : ''}>kg</option>
                            <option value="lbs" ${userData.weightUnit === 'lbs' ? 'selected' : ''}>lbs</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="bmi-height">Height:</label>
                    <div class="input-with-unit">
                        <input type="number" id="bmi-height" min="1" step="0.1" value="${userData.height || ''}" required>
                        <select id="bmi-height-unit">
                            <option value="cm" ${userData.heightUnit === 'cm' ? 'selected' : ''}>cm</option>
                            <option value="in" ${userData.heightUnit === 'in' ? 'selected' : ''}>in</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="primary-btn full-width">Calculate BMI</button>
            </form>
        </div>
    `;
    
    // Show the modal
    bmiModal.classList.remove('hidden');
    
    // Add event listeners
    const closeBtn = document.getElementById('close-bmi-calculator');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            bmiModal.classList.add('hidden');
        });
    }
    
    // Form submission
    const bmiForm = document.getElementById('bmi-calculator-form');
    if (bmiForm) {
        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const weight = parseFloat(document.getElementById('bmi-weight').value);
            const height = parseFloat(document.getElementById('bmi-height').value);
            const weightUnit = document.getElementById('bmi-weight-unit').value;
            const heightUnit = document.getElementById('bmi-height-unit').value;
            
            // Validate inputs
            if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
                showNotification('Please enter valid weight and height values', 'error');
                return;
            }
            
            // Update user data
            userData.weight = weight;
            userData.weightUnit = weightUnit;
            userData.height = height;
            userData.heightUnit = heightUnit;
            
            // Calculate BMI
            calculateBMI();
            
            // Save changes
            saveUserData();
            
            // Update UI
            updateBMIDisplay();
            updateDashboardData();
            
            // Close modal
            bmiModal.classList.add('hidden');
            
            // Show notification
            showNotification('BMI calculated successfully', 'success');
        });
    }
}

// Calculate BMI
function calculateBMI() {
    let weight = userData.weight;
    let height = userData.height;
    
    // Convert to metric for calculation if needed
    if (userData.weightUnit === 'lbs') {
        weight = weight * 0.453592; // Convert lbs to kg
    }
    
    if (userData.heightUnit === 'in') {
        height = height * 2.54; // Convert inches to cm
    }
    
    // Convert height from cm to meters
    height = height / 100;
    
    // Calculate BMI: weight (kg) / height² (m)
    const bmi = weight / (height * height);
    
    // Round to 1 decimal place
    userData.bmi = Math.round(bmi * 10) / 10;
    
    // Determine BMI category
    if (userData.bmi < 18.5) {
        userData.bmiCategory = 'Underweight';
    } else if (userData.bmi < 25) {
        userData.bmiCategory = 'Normal';
    } else if (userData.bmi < 30) {
        userData.bmiCategory = 'Overweight';
    } else {
        userData.bmiCategory = 'Obese';
    }
    
    // Save user data
    saveUserData();
}

// Update BMI display
function updateBMIDisplay() {
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const bmiRecommendations = document.getElementById('bmi-recommendations');
    
    if (!bmiValue || !bmiCategory || !bmiRecommendations || !userData.bmi) return;
    
    // Update BMI value and category
    bmiValue.textContent = userData.bmi;
    bmiCategory.textContent = userData.bmiCategory;
    
    // Update category class for styling
    bmiCategory.className = 'bmi-category';
    bmiCategory.classList.add(`category-${userData.bmiCategory.toLowerCase()}`);
    
    // Update recommendations based on category
    let recommendations = '';
    
    switch(userData.bmiCategory) {
        case 'Underweight':
            recommendations = `
                <li>Focus on nutrient-dense foods to gain weight healthily</li>
                <li>Increase protein intake to build muscle mass</li>
                <li>Consider a strength training program</li>
                <li>Consult with a dietitian for a personalized meal plan</li>
            `;
            break;
        case 'Normal':
            recommendations = `
                <li>Continue maintaining a balanced diet and regular exercise</li>
                <li>Focus on nutrient quality rather than calorie restriction</li>
                <li>Stay hydrated and get adequate sleep</li>
                <li>Consider regular fitness assessments to track progress</li>
            `;
            break;
        case 'Overweight':
            recommendations = `
                <li>Aim for moderate calorie deficit (~500 calories/day)</li>
                <li>Increase physical activity, both cardio and strength training</li>
                <li>Focus on whole foods while reducing processed foods</li>
                <li>Track progress with measurements beyond weight (inches, fitness tests)</li>
            `;
            break;
        case 'Obese':
            recommendations = `
                <li>Consider consulting a healthcare provider for personalized advice</li>
                <li>Start with gentle exercise like walking and gradually increase intensity</li>
                <li>Focus on sustainable dietary changes rather than extreme diets</li>
                <li>Consider working with a certified trainer and nutritionist</li>
            `;
            break;
    }
    
    bmiRecommendations.innerHTML = recommendations;
}

// ========================
// WEIGHT PREDICTION
// ========================

// Initialize weight prediction
function initWeightPrediction() {
    const predictionContainer = document.getElementById('weight-prediction-container');
    if (!predictionContainer) return;
    
    // Add weight history entry if not already recorded today
    addWeightHistoryEntry();
    
    // Update prediction display
    updateWeightPrediction();
    
    // Add event listeners
    const recalculateBtn = document.getElementById('recalculate-prediction-btn');
    if (recalculateBtn) {
        recalculateBtn.addEventListener('click', () => {
            addWeightHistoryEntry(true); // Force update
            updateWeightPrediction();
            showNotification('Weight prediction updated', 'success');
        });
    }
}

// Add current weight to history if not already recorded today
function addWeightHistoryEntry(forceUpdate = false) {
    // Initialize weight history if not exist
    if (!userData.weightHistory) {
        userData.weightHistory = [];
    }
    
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // Check if we already have an entry for today
    const todayEntry = userData.weightHistory.find(entry => entry.date === today);
    
    if (!todayEntry || forceUpdate) {
        // If forcing update, remove today's entry first
        if (forceUpdate && todayEntry) {
            userData.weightHistory = userData.weightHistory.filter(entry => entry.date !== today);
        }
        
        // Add new entry
        userData.weightHistory.push({
            date: today,
            weight: userData.weight,
            unit: userData.weightUnit
        });
        
        // Sort by date
        userData.weightHistory.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Keep only last 30 entries
        if (userData.weightHistory.length > 30) {
            userData.weightHistory = userData.weightHistory.slice(-30);
        }
        
        // Save user data
        saveUserData();
    }
}

// Update weight prediction display
function updateWeightPrediction() {
    const daysToGoalElement = document.getElementById('days-to-goal');
    const targetDateElement = document.getElementById('target-date');
    const weightTrendElement = document.getElementById('weight-trend');
    
    if (!daysToGoalElement || !targetDateElement || !weightTrendElement) return;
    
    // Need at least 2 weight entries to calculate trend
    if (!userData.weightHistory || userData.weightHistory.length < 2) {
        daysToGoalElement.textContent = 'Need more data';
        targetDateElement.textContent = 'Log your weight for at least 2 days';
        return;
    }
    
    // Calculate weight trend
    const weightTrend = calculateWeightTrend();
    
    // Update trend display
    const trendDirection = weightTrend < 0 ? 'losing' : 'gaining';
    const absWeightTrend = Math.abs(weightTrend);
    weightTrendElement.textContent = `You are ${trendDirection} ${absWeightTrend.toFixed(2)} ${userData.weightUnit}/week`;
    
    // Determine target weight based on goal
    let targetWeight;
    
    if (userData.goal === 'lose-weight') {
        // Target is 10% less than starting weight
        const startWeight = userData.weightHistory[0].weight;
        targetWeight = startWeight * 0.9;
    } else {
        // Target is 10% more than starting weight for muscle building
        const startWeight = userData.weightHistory[0].weight;
        targetWeight = startWeight * 1.1;
    }
    
    // Calculate days to goal
    const currentWeight = userData.weight;
    const weightDifference = Math.abs(targetWeight - currentWeight);
    
    // If no visible trend yet, or trend is in wrong direction
    if (Math.abs(weightTrend) < 0.1 || 
       (userData.goal === 'lose-weight' && weightTrend >= 0) || 
       (userData.goal === 'build-muscle' && weightTrend <= 0)) {
        
        daysToGoalElement.textContent = 'Maintain your current habits';
        targetDateElement.textContent = 'Need consistent progress data';
        return;
    }
    
    // Calculate days and target date
    const weeksToGoal = weightDifference / Math.abs(weightTrend);
    const daysToGoal = Math.round(weeksToGoal * 7);
    
    // Calculate target date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysToGoal);
    
    // Format dates
    const formattedTargetDate = targetDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Update display
    daysToGoalElement.textContent = daysToGoal;
    targetDateElement.textContent = formattedTargetDate;
}

// Calculate weekly weight trend from history
function calculateWeightTrend() {
    // Need at least 2 entries
    if (userData.weightHistory.length < 2) return 0;
    
    // Get latest entries, up to 4 weeks
    const recentEntries = userData.weightHistory.slice(-28);
    
    // Need to normalize weights to same unit (kg)
    const normalizedEntries = recentEntries.map(entry => {
        return {
            date: new Date(entry.date),
            weight: entry.unit === 'kg' ? entry.weight : entry.weight * 0.453592
        };
    });
    
    // Calculate daily weight changes
    let totalChange = 0;
    let dayCount = 0;
    
    for (let i = 1; i < normalizedEntries.length; i++) {
        const dayDiff = (normalizedEntries[i].date - normalizedEntries[i-1].date) / (1000 * 60 * 60 * 24);
        const weightDiff = normalizedEntries[i].weight - normalizedEntries[i-1].weight;
        
        // Only count if entries are consecutive days or close to it
        if (dayDiff > 0 && dayDiff < 4) {
            totalChange += weightDiff;
            dayCount += dayDiff;
        }
    }
    
    // No valid changes detected
    if (dayCount === 0) return 0;
    
    // Calculate average daily change
    const avgDailyChange = totalChange / dayCount;
    
    // Convert to weekly change
    const weeklyChange = avgDailyChange * 7;
    
    // Convert back to user's preferred unit
    return userData.weightUnit === 'kg' ? weeklyChange : weeklyChange * 2.20462;
}

// ========================
// SHARE STREAK FEATURE
// ========================

// Create shareable streak image
function createShareableStreak() {
    const shareContainer = document.getElementById('share-streak-container');
    if (!shareContainer) return;
    
    // Create the share content
    const shareContent = document.createElement('div');
    shareContent.className = 'share-preview';
    
    // Create share content with streak information
    shareContent.innerHTML = `
        <div class="share-header">
            <img src="https://loomforge.netlify.app/IOS/Random/Quick-Fit/Images/quickfit-logo.png" alt="QuickFit Logo" class="share-logo">
            <h2>My Fitness Streak</h2>
        </div>
        <div class="share-body">
            <div class="share-streak-count">
                <span class="count">${userData.streak}</span>
                <span class="label">DAY${userData.streak !== 1 ? 'S' : ''}</span>
            </div>
            <div class="share-streak-fire ${userData.streak >= 30 ? 'inferno' : userData.streak >= 14 ? 'blazing' : userData.streak >= 7 ? 'hot' : 'active'}">
                <i class="fas fa-fire"></i>
            </div>
            <div class="share-message">I've been crushing my fitness goals for ${userData.streak} consecutive days!</div>
            <div class="share-username">- ${userData.username}</div>
        </div>
        <div class="share-footer">
            <span>#FitnessJourney #QuickFit #StreakChallenge</span>
        </div>
    `;
    
    shareContainer.innerHTML = '';
    shareContainer.appendChild(shareContent);
    
    // Add download/share buttons
    const shareActions = document.createElement('div');
    shareActions.className = 'share-actions';
    shareActions.innerHTML = `
        <button id="download-streak-image" class="primary-btn">
            <i class="fas fa-download"></i> Download Image
        </button>
        <button id="share-streak-social" class="primary-btn">
            <i class="fas fa-share-alt"></i> Share
        </button>
    `;
    
    shareContainer.appendChild(shareActions);
    
    // Add event listeners
    document.getElementById('download-streak-image').addEventListener('click', downloadStreakImage);
    document.getElementById('share-streak-social').addEventListener('click', shareStreakToSocial);
}

// Download streak image
function downloadStreakImage() {
    // This is a simplified version - in a real app, you'd use html2canvas or similar
    showNotification('Your streak image is being generated and will download shortly...', 'info');
    
    // Simulate download delay
    setTimeout(() => {
        showNotification('Streak image downloaded!', 'success');
    }, 1500);
}

// Share streak to social media
function shareStreakToSocial() {
    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: 'My Fitness Streak',
            text: `I've been crushing my fitness goals for ${userData.streak} consecutive days with QuickFit! #FitnessJourney`,
            // In a real app, you'd generate and host this image
            url: 'https://quickfit.example.com/share'
        })
        .then(() => showNotification('Shared successfully!', 'success'))
        .catch(error => {
            console.error('Error sharing:', error);
            showNotification('Sharing failed. Please try again.', 'error');
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        showNotification('Sharing options opened!', 'info');
        
        // Create custom share dialog
        const shareDialog = document.createElement('div');
        shareDialog.className = 'share-dialog modal-container';
        shareDialog.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Share Your Streak</h3>
                    <button id="close-share-dialog" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="share-options">
                    <button class="share-option" data-platform="facebook">
                        <i class="fab fa-facebook"></i> Facebook
                    </button>
                    <button class="share-option" data-platform="twitter">
                        <i class="fab fa-twitter"></i> Twitter
                    </button>
                    <button class="share-option" data-platform="instagram">
                        <i class="fab fa-instagram"></i> Instagram
                    </button>
                    <button class="share-option" data-platform="whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(shareDialog);
        
        // Add event listeners
        document.getElementById('close-share-dialog').addEventListener('click', () => {
            shareDialog.remove();
        });
        
        document.querySelectorAll('.share-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const platform = e.currentTarget.dataset.platform;
                // In a real app, this would open the specific share URL
                showNotification(`Sharing to ${platform}...`, 'success');
                shareDialog.remove();
            });
        });
    }
}

// Show share streak modal
function showShareStreakModal() {
    // Check if modal exists, create if not
    let shareModal = document.getElementById('share-streak-modal');
    
    if (!shareModal) {
        shareModal = document.createElement('div');
        shareModal.id = 'share-streak-modal';
        shareModal.className = 'modal-container';
        
        document.body.appendChild(shareModal);
    }
    
    // Create modal content
    shareModal.innerHTML = `
        <div class="modal-content share-modal-content">
            <div class="modal-header">
                <h3>Share Your Streak</h3>
                <button id="close-share-modal" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div id="share-streak-container" class="share-streak-container">
                <!-- Share content will be generated here -->
            </div>
        </div>
    `;
    
    // Show the modal
    shareModal.classList.remove('hidden');
    
    // Add event listeners
    const closeBtn = document.getElementById('close-share-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            shareModal.classList.add('hidden');
        });
    }
    
    // Generate streak image
    createShareableStreak();
}

// ========================
// WORKOUT DETECTION SENSOR
// ========================

// Initialize workout detection
function initWorkoutDetection() {
    const workoutDetection = document.getElementById('workout-detection');
    if (!workoutDetection) return;
    
    // Set initial state
    updateWorkoutDetectionDisplay();
    
    // Add event listeners
    const startDetectionBtn = document.getElementById('start-detection');
    const stopDetectionBtn = document.getElementById('stop-detection');
    
    if (startDetectionBtn) {
        // Remove existing listeners
        const newStartBtn = startDetectionBtn.cloneNode(true);
        startDetectionBtn.parentNode.replaceChild(newStartBtn, startDetectionBtn);
        
        // Add new listener
        newStartBtn.addEventListener('click', startWorkoutDetection);
    }
    
    if (stopDetectionBtn) {
        // Remove existing listeners
        const newStopBtn = stopDetectionBtn.cloneNode(true);
        stopDetectionBtn.parentNode.replaceChild(newStopBtn, stopDetectionBtn);
        
        // Add new listener
        newStopBtn.addEventListener('click', stopWorkoutDetection);
    }
    
    // Check if device supports motion detection
    const motionSupport = document.getElementById('motion-support');
    if (motionSupport) {
        if (window.DeviceMotionEvent) {
            // Check if permission is needed (iOS 13+)
            if (typeof DeviceMotionEvent.requestPermission === 'function') {
                motionSupport.textContent = 'Your device supports motion detection! Click "Start Detection" to allow access.';
            } else {
                motionSupport.textContent = 'Your device supports motion detection!';
            }
        } else {
            motionSupport.textContent = 'Your device does not support motion detection. Using simulation instead.';
        }
    }
}

// Request motion permission (for iOS 13+)
async function requestMotionPermission() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        try {
            const permissionState = await DeviceMotionEvent.requestPermission();
            return permissionState === 'granted';
        } catch (error) {
            console.error('Error requesting motion permission:', error);
            return false;
        }
    }
    return true; // Permission not needed
}

// Start workout detection
async function startWorkoutDetection() {
    if (userData.workoutDetection.isActive) return;
    
    // Request permission if needed
    const permissionGranted = await requestMotionPermission();
    if (!permissionGranted) {
        showNotification('Motion detection permission denied', 'error');
        return;
    }
    
    // Update user data
    userData.workoutDetection.isActive = true;
    userData.workoutDetection.startTime = new Date().toISOString();
    userData.workoutDetection.lastUpdate = new Date().toISOString();
    userData.workoutDetection.detectedMovements = 0;
    
    // Show active state
    const detectionStatus = document.getElementById('detection-status');
    if (detectionStatus) {
        detectionStatus.textContent = 'Active';
        detectionStatus.className = 'status-active';
    }
    
    const startBtn = document.getElementById('start-detection');
    const stopBtn = document.getElementById('stop-detection');
    
    if (startBtn) startBtn.classList.add('hidden');
    if (stopBtn) stopBtn.classList.remove('hidden');
    
    // Start animation
    const detectionAnimation = document.getElementById('detection-animation');
    if (detectionAnimation) {
        detectionAnimation.classList.add('active');
    }
    
    // Start detection
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', handleMotionEvent);
    } else {
        // Start simulation if motion detection is not supported
        startMotionSimulation();
    }
    
    // Update display
    updateWorkoutDetectionDisplay();
    
    // Save user data
    saveUserData();
    
    // Show notification
    showNotification('Workout detection started', 'success');
}

// Stop workout detection
function stopWorkoutDetection() {
    if (!userData.workoutDetection.isActive) return;
    
    // Update user data
    userData.workoutDetection.isActive = false;
    
    // Calculate duration
    const startTime = new Date(userData.workoutDetection.startTime);
    const endTime = new Date();
    const durationMs = endTime - startTime;
    userData.workoutDetection.duration = Math.round(durationMs / 1000); // duration in seconds
    
    // Calculate calories burned (rough estimate: 0.1 calories per detected movement)
    const caloriesBurned = Math.round(userData.workoutDetection.detectedMovements * 0.1);
    
    // Add to total burned calories
    userData.calorieData.burned += caloriesBurned;
    
    // Add workout event to calendar
    addEvent({
        date: new Date().toISOString().split('T')[0],
        type: 'workout',
        title: 'Sensor Detected Workout',
        calories: caloriesBurned,
        notes: `Duration: ${Math.round(userData.workoutDetection.duration / 60)} minutes, Movements: ${userData.workoutDetection.detectedMovements}`
    });
    
    // Show summary
    showWorkoutSummary(userData.workoutDetection.duration, userData.workoutDetection.detectedMovements, caloriesBurned);
    
    // Show inactive state
    const detectionStatus = document.getElementById('detection-status');
    if (detectionStatus) {
        detectionStatus.textContent = 'Inactive';
        detectionStatus.className = 'status-inactive';
    }
    
    const startBtn = document.getElementById('start-detection');
    const stopBtn = document.getElementById('stop-detection');
    
    if (startBtn) startBtn.classList.remove('hidden');
    if (stopBtn) stopBtn.classList.add('hidden');
    
    // Stop animation
    const detectionAnimation = document.getElementById('detection-animation');
    if (detectionAnimation) {
        detectionAnimation.classList.remove('active');
    }
    
    // Stop detection
    if (window.DeviceMotionEvent) {
        window.removeEventListener('devicemotion', handleMotionEvent);
    } else {
        // Stop simulation
        stopMotionSimulation();
    }
    
    // Update displays
    updateWorkoutDetectionDisplay();
    updateCalorieDisplays();
    updateCalendar();
    
    // Save user data
    saveUserData();
    
    // Show notification
    showNotification('Workout completed!', 'success');
}

// Handle motion event
function handleMotionEvent(event) {
    if (!userData.workoutDetection.isActive) return;
    
    // Calculate acceleration magnitude
    const acceleration = event.accelerationIncludingGravity;
    
    // Check if acceleration is valid
    if (!acceleration || acceleration.x === null || acceleration.y === null || acceleration.z === null) {
        return;
    }
    
    const magnitude = Math.sqrt(
        acceleration.x * acceleration.x + 
        acceleration.y * acceleration.y + 
        acceleration.z * acceleration.z
    );
    
    // Detect significant movement (threshold: 15)
    if (magnitude > 15) {
        // Check if enough time has passed since last movement (to avoid multiple counts for same movement)
        const now = new Date();
        const lastUpdate = new Date(userData.workoutDetection.lastUpdate);
        const timeDiff = now - lastUpdate;
        
        if (timeDiff > 500) { // 500ms threshold
            userData.workoutDetection.detectedMovements++;
            userData.workoutDetection.lastUpdate = now.toISOString();
            
            // Update display
            updateWorkoutDetectionDisplay();
            
            // Animate detection
            showDetectionFeedback();
        }
    }
}

// Motion simulation variables
let motionSimulationInterval = null;

// Start motion simulation (for devices without motion sensors)
function startMotionSimulation() {
    motionSimulationInterval = setInterval(() => {
        // Simulate random movements every 2-5 seconds
        if (Math.random() > 0.7) {
            userData.workoutDetection.detectedMovements++;
            userData.workoutDetection.lastUpdate = new Date().toISOString();
            
            // Update display
            updateWorkoutDetectionDisplay();
            
            // Animate detection
            showDetectionFeedback();
        }
    }, 2000);
}

// Stop motion simulation
function stopMotionSimulation() {
    if (motionSimulationInterval) {
        clearInterval(motionSimulationInterval);
        motionSimulationInterval = null;
    }
}

// Update workout detection display
function updateWorkoutDetectionDisplay() {
    const movementCount = document.getElementById('movement-count');
    const duration = document.getElementById('duration');
    
    if (!movementCount || !duration) return;
    
    movementCount.textContent = userData.workoutDetection.detectedMovements;
    
    // Calculate duration if active
    if (userData.workoutDetection.isActive) {
        const startTime = new Date(userData.workoutDetection.startTime);
        const now = new Date();
        const durationSec = Math.round((now - startTime) / 1000);
        const minutes = Math.floor(durationSec / 60);
        const seconds = durationSec % 60;
        
        duration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
        duration.textContent = '0:00';
    }
}

// Show detection feedback animation
function showDetectionFeedback() {
    const feedback = document.getElementById('detection-feedback');
    if (!feedback) return;
    
    // Create a new dot
    const dot = document.createElement('div');
    dot.className = 'detection-dot';
    
    // Random position within the container
    const containerRect = feedback.getBoundingClientRect();
    const x = Math.random() * (containerRect.width - 20);
    const y = Math.random() * (containerRect.height - 20);
    
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    
    // Add to container
    feedback.appendChild(dot);
    
    // Remove after animation
    setTimeout(() => {
        dot.remove();
    }, 2000);
}

// Show workout summary
function showWorkoutSummary(duration, movements, calories) {
    const summary = document.getElementById('workout-summary');
    if (!summary) return;
    
    // Update summary content
    const summaryDuration = document.getElementById('summary-duration');
    const summaryMovements = document.getElementById('summary-movements');
    const summaryCalories = document.getElementById('summary-calories');
    
    if (summaryDuration) summaryDuration.textContent = `${Math.round(duration / 60)} minutes`;
    if (summaryMovements) summaryMovements.textContent = movements;
    if (summaryCalories) summaryCalories.textContent = calories;
    
    // Show summary
    summary.classList.remove('hidden');
    
    // Hide after a delay
    setTimeout(() => {
        summary.classList.add('hidden');
    }, 5000);
}

// ========================
// EVENT LISTENERS
// ========================

document.addEventListener('DOMContentLoaded', () => {
    // Disable zooming, copying, selection
    disableZoomAndSelection();
    
    // Check login status
    checkLoginStatus();
    
    // Load saved theme
    loadTheme();
    
    // Detect device on load
    detectDevice();
    
    // Login button event
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const usernameInput = document.getElementById('username');
            if (!usernameInput) return;
            
            const username = sanitizeInput(usernameInput.value.trim());

            if (!username) {
                showNotification('Please enter a username', 'error');
                return;
            }
            
            // In a real app, you would validate credentials server-side
            // For this demo, we'll just accept any input
            
            userData.username = username;
            userData.isLoggedIn = true;
            userData.lastLogin = new Date().toISOString();
            
            // Check if user has previous data
            const existingUser = loadUserData();
            
            if (existingUser && userData.username === username) {
                // User already exists, update login info
                userData.isLoggedIn = true;
                userData.lastLogin = new Date().toISOString();
                saveUserData();
                showDashboard();
            } else {
                // New user, go to onboarding
                saveUserData();
                showOnboarding();
            }
        });
    }
    
    // Goal selection event
    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Save selected goal
            userData.goal = btn.dataset.goal;
            
            // Show weight input
            document.getElementById('goal-selection').classList.add('hidden');
            document.getElementById('weight-input').classList.remove('hidden');
        });
    });
    
    // Weight submit event
    const weightSubmitBtn = document.getElementById('weight-submit');
    if (weightSubmitBtn) {
        weightSubmitBtn.addEventListener('click', () => {
            const weightInput = document.getElementById('current-weight');
            const unitSelect = document.getElementById('weight-unit');
            
            if (!weightInput || !unitSelect) return;
            
            const weight = parseFloat(weightInput.value);
            const unit = unitSelect.value;
            
            if (isNaN(weight) || weight <= 0) {
                showNotification('Please enter a valid weight', 'error');
                return;
            }
            
            userData.weight = weight;
            userData.weightUnit = unit;
            
            // Now proceed to height input
            document.getElementById('weight-input').classList.add('hidden');
            document.getElementById('height-input').classList.remove('hidden');
        });
    }
    
    // Height submit event
    const heightSubmitBtn = document.getElementById('height-submit');
    if (heightSubmitBtn) {
        heightSubmitBtn.addEventListener('click', () => {
            const heightInput = document.getElementById('current-height');
            const unitSelect = document.getElementById('height-unit');
            
            if (!heightInput || !unitSelect) return;
            
            const height = parseFloat(heightInput.value);
            const unit = unitSelect.value;
            
            if (isNaN(height) || height <= 0) {
                showNotification('Please enter a valid height', 'error');
                return;
            }
            
            userData.height = height;
            userData.heightUnit = unit;
            
            // Calculate BMI
            calculateBMI();
            
            // Calculate default calorie goal based on weight, height and goal
            if (userData.weightUnit === 'kg') {
                userData.calorieGoal = Math.round(userData.weight * 22 * (userData.goal === 'lose-weight' ? 0.8 : 1.2));
            } else {
                userData.calorieGoal = Math.round(userData.weight * 10 * (userData.goal === 'lose-weight' ? 0.8 : 1.2));
            }
            
            // Show calorie goal input
            document.getElementById('height-input').classList.add('hidden');
            document.getElementById('calorie-goal-input').classList.remove('hidden');
            
            // Set default value in input
            const calorieGoalInput = document.getElementById('calorie-goal');
            const recommendedCalories = document.getElementById('recommended-calories');
            
            if (calorieGoalInput) calorieGoalInput.value = userData.calorieGoal;
            if (recommendedCalories) recommendedCalories.textContent = userData.calorieGoal;
        });
    }
    
    // Calorie goal submit event
    const calorieGoalSubmitBtn = document.getElementById('calorie-goal-submit');
    if (calorieGoalSubmitBtn) {
        calorieGoalSubmitBtn.addEventListener('click', () => {
            const calorieGoalInput = document.getElementById('calorie-goal');
            if (!calorieGoalInput) return;
            
            const calorieGoal = parseInt(calorieGoalInput.value, 10);
            
            if (isNaN(calorieGoal) || calorieGoal <= 0) {
                showNotification('Please enter a valid calorie goal', 'error');
                return;
            }
            
            userData.calorieGoal = calorieGoal;
            
            // Create default meal plan
            createDefaultMealPlan();
            
            // Save user data
            saveUserData();
            
            // Show dashboard
            showDashboard();
            
            // Show welcome notification
            showNotification(`Welcome to QuickFit, ${userData.username}!`, 'success');
        });
    }
    
    // Theme toggle event
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    // Filter buttons event
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Reload workout library
            loadWorkoutLibrary();
        });
    });
    
    // Refresh workout button event
    const refreshWorkoutBtn = document.getElementById('refresh-workout');
    if (refreshWorkoutBtn) {
        refreshWorkoutBtn.addEventListener('click', setDailyWorkout);
    }
    
    // Share streak button event
    const shareStreakBtn = document.getElementById('share-streak-btn');
    if (shareStreakBtn) {
        shareStreakBtn.addEventListener('click', showShareStreakModal);
    }
    
    // Window resize event for device detection
    window.addEventListener('resize', detectDevice);
    
    // Window orientation change event
    window.addEventListener('orientationchange', detectDevice);
});

// Disable zooming, text selection and copying
function disableZoomAndSelection() {
    // Add viewport meta tag to disable pinch zoom
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewportMeta);
    
    // Add style to disable text selection
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        * {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
        input, textarea {
            -webkit-user-select: text;
            -khtml-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
        }
    `;
    document.head.appendChild(styleElement);
    
    // Prevent context menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
    
    // Prevent copy paste except on inputs and textareas
    document.addEventListener('copy', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });
    
    document.addEventListener('cut', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });
    
    document.addEventListener('paste', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });
    
    // Prevent zooming on double tap (for touch devices)
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd < 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Ensure badge overlay close button works
document.getElementById('close-badge')?.addEventListener('click', () => {
    document.getElementById('badge-overlay')?.classList.add('hidden');
});

// Ensure video modal close button works
document.getElementById('close-video')?.addEventListener('click', closeVideoModal);