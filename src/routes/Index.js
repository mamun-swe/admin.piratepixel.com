
import {
    PieChart,
    Plus,
    List,
    Layers,
    UserCheck,
    Users,
    UploadCloud,
} from 'react-feather'

// --- Dashboard ---
import DashboardIndex from '../pages/dashboard/Index'

// --- Category ---
import CategoryIndex from '../pages/category/Index'
import CategoryStore from '../pages/category/Create'
import CategoryEdit from '../pages/category/Edit'

// --- Admin ---
import AdminIndex from '../pages/admin/Index'
import AdminStore from '../pages/admin/Create'

// --- Users ---
import UsersIndex from '../pages/users/Index'

// --- Uploads ---
import UploadsIndex from '../pages/uploads/Index'

// --- Profile ---
import ProfileIndex from '../pages/profile/Index'


export const routes = [
    {
        title: "Dashboard",
        name: "dashboard",
        path: "/dashboard/",
        exact: true,
        inDrawer: true,
        icon: <PieChart size={18} />,
        component: DashboardIndex
    },
    {
        title: "Category",
        name: "category",
        inDrawer: true,
        icon: <Layers size={18} />,
        child: [
            {
                title: "All Category",
                name: "category index",
                path: "/dashboard/category",
                exact: true,
                inDrawer: true,
                icon: <List size={18} />,
                component: CategoryIndex
            },
            {
                title: "New Category",
                name: "category store",
                path: "/dashboard/category/store",
                exact: true,
                inDrawer: true,
                icon: <Plus size={18} />,
                component: CategoryStore
            },
            {
                title: "Edit Category",
                name: "category edit",
                path: "/dashboard/category/:id",
                exact: true,
                inDrawer: false,
                icon: null,
                component: CategoryEdit
            }
        ]
    },
    {
        title: "Admin",
        name: "admin",
        inDrawer: true,
        icon: <UserCheck size={18} />,
        child: [
            {
                title: "All Admin",
                name: "admin index",
                path: "/dashboard/admin",
                exact: true,
                inDrawer: true,
                icon: <List size={18} />,
                component: AdminIndex
            },
            {
                title: "New Admin",
                name: "admin store",
                path: "/dashboard/admin/store",
                exact: true,
                inDrawer: true,
                icon: <Plus size={18} />,
                component: AdminStore
            }
        ]
    },
    {
        title: "Users",
        name: "users",
        path: "/dashboard/users",
        exact: true,
        inDrawer: true,
        icon: <Users size={18} />,
        component: UsersIndex
    },
    {
        title: "Uploads",
        name: "uploads",
        path: "/dashboard/uploads",
        exact: true,
        inDrawer: true,
        icon: <UploadCloud size={18} />,
        component: UploadsIndex
    },
    {
        title: "Profile",
        name: "profile",
        inDrawer: false,
        icon: null,
        child: [
            {
                title: "Profile Show",
                name: "profile index",
                path: "/dashboard/profile",
                exact: true,
                inDrawer: false,
                icon: null,
                component: ProfileIndex
            }
        ]
    }
]