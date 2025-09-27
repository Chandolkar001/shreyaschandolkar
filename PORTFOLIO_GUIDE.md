# Portfolio Expansion Guide

This portfolio is designed to be fully data-driven, making it easy to update and expand without touching the website code. All content is managed through data files in the `_data` directory.

## 📁 Data Files Structure

### Core Data Files

#### `_data/about.js`
Central configuration file containing personal information:

```javascript
const about = {
    name: 'Your Name',                    // Used in header, footer, alt tags
    title: 'Your Job Title',              // Professional title
    profileImage: '/your-image.jpg',      // Profile picture path
    location: 'Your Location',            // Current location
    typeAnimation: [                      // Animation text sequence
        "Title 1",
        "Title 2", 
        "Title 3"
    ],
    github: {                             // GitHub integration
        username: 'your-github-username',
        theme: 'dark'                     // 'dark' or 'light'
    },
    about: 'Your bio text...',            // Main about description
    externalLinks: {                      // External links used in bio
        flytbase: 'https://company.com/',
        pict: 'https://university.edu/'
    },
    socialMedia: {                        // Social media links (used in navbar)
        twitter: 'https://twitter.com/username',
        instagram: 'https://instagram.com/username',
        linkedin: 'https://linkedin.com/in/username',
        github: 'https://github.com/username',
        scholar: 'https://scholar.google.com/citations?user=ID',
        resume: 'https://drive.google.com/file/d/ID/view'
    }
};
```

#### `_data/exp.js`
Work experience data:

```javascript
const exp = [
    {
        name: 'Company Name',
        years: 'Start Date - End Date',
        position: 'Job Title',
        type: 'Full-Time / Part-Time / Internship',
        place: 'Location',
        href: 'https://company-website.com/',
        desc: [
            'Achievement or responsibility 1',
            'Achievement or responsibility 2',
            'Achievement or responsibility 3'
        ]
    }
    // Add more experiences...
];
```

#### `_data/project.js`
Project portfolio data:

```javascript
const projects = [
    {
        title: 'Project Name',
        href: 'https://github.com/username/project',
        languages: ['Technology 1', 'Technology 2', 'Technology 3'],
        desc: [
            'Project description point 1',
            'Key feature or achievement 2',
            'Impact or result 3'
        ]
    }
    // Add more projects...
];
```

#### `_data/skill.js`
Skills and technologies:

```javascript
const skills = {
    Languages: [
        {name: 'Python', color: 'blue'},
        {name: 'JavaScript', color: 'yellow'}
    ],
    Frameworks: [
        {name: 'React', color: 'blue'},
        {name: 'Django', color: 'green'}
    ],
    DevOps: [
        {name: 'Docker', color: 'blue'},
        {name: 'Kubernetes', color: 'blue'}
    ],
    Databases: [
        {name: 'PostgreSQL', color: 'blue'},
        {name: 'MongoDB', color: 'green'}
    ],
    IoT_Robotics: [
        {name: 'ROS', color: 'red'},
        {name: 'Arduino', color: 'teal'}
    ],
    Tools: [
        {name: 'Git', color: 'orange'},
        {name: 'VS Code', color: 'blue'}
    ]
};
```

## 🚀 How to Update Your Portfolio

### Adding New Experience
1. Open `_data/exp.js`
2. Add a new object to the array with all required fields
3. The experience will automatically appear on the Experience page

### Adding New Projects
1. Open `_data/project.js`
2. Add a new project object with title, href, languages, and description
3. The project will automatically appear on the Projects page

### Adding New Skills
1. Open `_data/skill.js`
2. Add skills to existing categories or create new categories
3. Skills will automatically appear in the Skills modal

### Updating Personal Information
1. Open `_data/about.js`
2. Update any field (name, bio, social links, etc.)
3. Changes will reflect across the entire website

### Adding New Social Media Links
1. Open `_data/about.js`
2. Add new links to the `socialMedia` object
3. Update `app/components/Navbar.jsx` to include the new icon and mapping

## 🎨 Customization Options

### Profile Image
- Replace `/public/shreyas.jpg` with your image
- Update `profileImage` path in `_data/about.js`

### Theme Colors
- Light/Dark modes are automatically handled
- Modify `app/globals.css` for color scheme changes

### Animation Text
- Update `typeAnimation` array in `_data/about.js`
- Add or remove titles as needed

### GitHub Integration
- Update `github.username` in `_data/about.js`
- Change `github.theme` to 'light' or 'dark'

## 📝 Content Writing Tips

### Experience Descriptions
- Use action verbs (Developed, Implemented, Led, Designed)
- Include quantifiable results when possible
- Focus on impact and achievements

### Project Descriptions
- Explain the problem solved
- Highlight key technologies used
- Mention results or recognition

### Bio Writing
- Keep it conversational but professional
- Include your passion and interests
- Mention key achievements and current role

## 🔧 Technical Notes

### File Structure
```
_data/
├── about.js      (Personal info, social links)
├── exp.js        (Work experience)
├── project.js    (Projects portfolio)
└── skill.js      (Skills and technologies)
```

### Data Flow
- Components import data files directly
- No hardcoded content in UI components
- All text, links, and images come from data files

### Expanding Categories
To add new skill categories:
1. Add the category to `_data/skill.js`
2. The UI will automatically display it in the skills modal

To add new project fields:
1. Add fields to project objects in `_data/project.js`
2. Update `app/projects/projectData.jsx` to display new fields

## ⚡ Quick Updates Checklist

**For a new job:**
- [ ] Update current role in `_data/exp.js`
- [ ] Update bio in `_data/about.js` if needed
- [ ] Add new skills learned to `_data/skill.js`

**For a new project:**
- [ ] Add project to `_data/project.js`
- [ ] Add any new technologies to `_data/skill.js`

**For personal changes:**
- [ ] Update name/title in `_data/about.js`
- [ ] Update social media links in `_data/about.js`
- [ ] Replace profile image in `/public/`

**For contact information:**
- [ ] Update social media links in `_data/about.js`
- [ ] Update resume link in `_data/about.js`

This data-driven approach ensures your portfolio stays current with minimal effort - just update the data files and your changes will reflect across the entire website!