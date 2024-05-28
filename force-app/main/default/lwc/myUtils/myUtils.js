export const SOCIAL_URLS = [
  {
    id: 1,
    url: "https://www.linkedin.com/"
  },
  {
    id: 2,
    url: "https://www.facebook.com/"
  },
  {
    id: 3,
    url: "https://github.com/"
  }
];

export const SOCIALS = [
  {
    id: 1,
    name: "LinkedIn",
    slug: "www.linkedin.com",
    icon: "fa-brands fa-linkedin-in"
  },
  {
    id: 2,
    name: "Facebook",
    slug: "facebook.com",
    icon: "fa-brands fa-square-facebook"
  },
  {
    id: 3,
    name: "GitHub",
    slug: "github.com",
    icon: "fa-brands fa-square-github"
  }
];

export const SOCIAL_SHARES = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin social-icon"
  },
  {
    id: 2,
    name: "Facebook",
    icon: "fa-brands fa-square-facebook social-icon",
    network: "facebook"
  },
  {
    id: 3,
    name: "Twitter",
    icon: "fa-brands fa-square-twitter social-icon"
  }
];

export const FOLLOW_ME = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    url: "https://linkedin.com/in/solivervmazo"
  },
  {
    id: 2,
    name: "GitHub",
    icon: "fa-brands fa-github",
    url: "https://github.com/solivervmazo"
  },
  {
    id: 3,
    name: "Kaggle",
    icon: "fa-brands fa-kaggle",
    url: "https://www.kaggle.com/solivermazo"
  }
];

export const PROJECTS = [
  {
    id: "sql_window_functions_for_analytics_45w8ks",
    dir: "sql_window_func",
    project: "sql-window-functions-for-analytics",
    title: "SQL Window Functions for Analytics",
    category: "Data Analysis",
    img: "cover.png",
    type: "Guided Project",
    date: "July 2023",
    details: {
      client: false,
      guided: {
        heading: "About Project",
        details: {
          provider: null,
          course: {
            name: "SQL Window Functions for Analytics",
            url: "https://www.coursera.org/projects/sql-window-functions-for-analytics"
          }
        }
      },
      objective: {
        key: "objective",
        heading: "Objective",
        text: "This is a hands-on project that will help SQL users use window functions extensively for database insights. In this project, you will learn how to explore and query the project-db database extensively. We will start this hands-on project by retrieving the data in the table in the database."
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["SQL", "MySql Workbench", "Data Analysis", "Data Science"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["1.png"],
      md: "README"
    },
    link: false
  },
  {
    id: "london_bike_sharing_eda_with_python_vvq9jp",
    dir: "london_bike_eda",
    project: "london-bike-eda-dataviz",
    title: "London Bike Sharing - EDA with Python",
    category: "Data Analysis",
    img: "cover.png",
    metaImg: "meta.png",
    type: "Youtube Project",
    date: "July 2023",
    details: {
      client: false,
      guided: {
        heading: "About Project",
        details: {
          provider: null,
          course: {
            name: "Data Analyst Portfolio Project | From data gathering to data visualisation",
            url: "https://youtu.be/nl9eZl1IOKI"
          }
        }
      },
      objective: {
        key: "objective",
        heading: "Objective",
        text: "End to end data analyst portfolio project from gathering data, through data exploration, assessment and manipulation using the pandas library in Python, to data visualisation in Tableau."
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Data Analysis", "Python", "Data Science", "Tableau"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["cover.png", "heatmap.png", "hour.png"],
      md: "EDA"
    },
    viz: {
      name: "Tableau",
      icon: false,
      set: false,
      url: "https://public.tableau.com/views/LondonBikeRidesViz/LondonBikeRides?:language=en-US&:display_count=n&:origin=viz_share_link",
      logo: "https://public.tableau.com/app/assets/tableau-public-logo-rgb.07774149.svg"
    },
    link: {
      name: "Kaggle",
      icon: "kaggle",
      set: "fab",
      url: "https://www.kaggle.com/solivermazo/london-bike-sharing-eda",
      logo: "https://www.kaggle.com/static/images/site-logo.svg"
    }
  },
  {
    id: "market_research_for_ads_target_xjks6d",
    dir: "mrfat",
    project: "market-research-for-ads-target",
    title: "Market Research For Ads Target",
    category: "Data Analysis",
    img: "cover.png",
    type: "Soliver Mazo",
    date: "July 2023",
    details: {
      client: false,
      guided: false,
      objective: {
        key: "objective",
        heading: "Objective",
        text: "End to end data analyst portfolio project using kaggle for EDA to data visualisation in Tableau."
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: [
          "Data Analysis",
          "SQL",
          "Python",
          "Data Science",
          "Kaggle",
          "Tableau"
        ]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["nb.png", "viz.png"],
      md: "EDA"
    },
    viz: {
      name: "Tableau",
      icon: false,
      set: false,
      url: "https://public.tableau.com/views/MarketResearchForAdsTarget/Main?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
      logo: "https://public.tableau.com/app/assets/tableau-public-logo-rgb.07774149.svg"
    },
    link: {
      name: "Kaggle",
      icon: "kaggle",
      set: "fab",
      url: "https://www.kaggle.com/code/solivermazo/market-research-for-ads-target-eda",
      logo: "https://www.kaggle.com/static/images/site-logo.svg"
    }
  },
  {
    id: "us_flight_delays_and_cancellations_2015_4v5kqu",
    dir: "usflights2015",
    project: "us-flight-delays-and-cancellations-2015",
    title: "2015 Flight Delays and Cancellations US",
    category: "Data Analysis",
    img: "cover.png",
    type: "Soliver Mazo",
    date: "July 2023",
    details: {
      client: false,
      guided: false,
      objective: {
        key: "objective",
        heading: "Objective",
        text: "Dashboard creation in Tableau using 2015 Flight Delays and Cancellations US data set from kaggle."
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Data Analysis", "Tableau"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["cover.png"],
      md: "EDA"
    },
    viz: {
      name: "Tableau",
      icon: false,
      set: false,
      url: "https://public.tableau.com/views/2015FlightDelaysandCancellationsUS/Main?:language=en-US&:display_count=n&:origin=viz_share_link",
      logo: "https://public.tableau.com/app/assets/tableau-public-logo-rgb.07774149.svg"
    }
  },
  {
    id: "iowa_liquor_sales_2012_2017_v2_dil09k",
    dir: "liquorsalesv2",
    project: "iowa-liquor-sales-v2",
    title: "Iowa Liquor Sales 2012-2017 V2",
    category: "Data Analysis",
    img: "cover.png",
    type: "Soliver Mazo",
    date: "July 2023",
    details: {
      client: false,
      guided: false,
      objective: {
        key: "objective",
        heading: "Objective",
        text: "Dashboard creation in Tableau using Iowa Liquor Sales(2012-2017) data set from kaggle."
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Data Analysis", "Python", "SQL", "Tableau"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["cover.png", "eda1.png", "eda2.png"],
      md: "EDA"
    },
    viz: {
      name: "Tableau",
      icon: false,
      set: false,
      url: "https://public.tableau.com/views/IowaLiquorSalesV2/Main?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
      logo: "https://public.tableau.com/app/assets/tableau-public-logo-rgb.07774149.svg"
    },
    link: {
      name: "Kaggle",
      icon: "kaggle",
      set: "fab",
      url: "https://www.kaggle.com/code/solivermazo/iowa-liquor-sales-2015-eda",
      logo: "https://www.kaggle.com/static/images/site-logo.svg"
    }
  },
  {
    id: "a_game_of_defense_of_the_ancient_2_dota2_p12n2j",
    dir: "dota2",
    project: "dota2",
    title: "A Game of Defense of The Ancient 2 - DOTA2",
    category: "Data Analysis",
    img: "dota2_player_view.png",
    type: "Soliver Mazo",
    date: "Aug 2023",
    details: {
      client: false,
      guided: false,
      objective: {
        key: "objective",
        heading: "Objective",
        text: "Dashboard creation in Tableau using DOTA2 data set from kaggle."
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Data Analysis", "Tableau"]
      }
    },
    src: {
      coverImg: "dota2_player_view.png",
      images: [
        "dota2_team_view.png",
        "dota2_player_view.png",
        "dota2_home_view.png"
      ],
      md: "EDA"
    },
    viz: {
      name: "Tableau",
      icon: false,
      set: false,
      url: "https://public.tableau.com/views/AGameofDefenseofTheAncient2-DOTA2/Main?:language=en-US&:display_count=n&:origin=viz_share_link",
      logo: "https://public.tableau.com/app/assets/tableau-public-logo-rgb.07774149.svg"
    }
  }
];

export const CREDENTIALS = {
  featured: [
    {
      id: "74TB8VE8HFQ9",
      title: "Python for Everybody Specialization",
      credential:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/74TB8VE8HFQ9",
      img: "/Certificates/74TB8VE8HFQ9.png",
      org: "Coursera | University of Michigan",
      featured: true,
      skills: ["Python", "JSON", "XML", "DBMS"]
    },
    {
      id: "ZPA843QSN77N",
      title: "Business Analytics",
      credential:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/ZPA843QSN77N",
      img: "/Certificates/ZPA843QSN77N.png",
      org: "Coursera | Wharton University of Pennsylvania",
      featured: true,
      skills: [
        "Analytics",
        "Customer Analytics",
        "Business Analytics",
        "Decision Tree"
      ]
    }
  ],
  courses: [
    {
      id: "RPHXLFSDMY5Q",
      title: "SQL for Data Science",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/RPHXLFSDMY5Q",
      img: "/Certificates/RPHXLFSDMY5Q.png",
      org: "Coursera | University of California, Davis",
      featured: false,
      skills: ["Data Science"]
    },
    {
      id: "WQTCNGESCJE6",
      title: "Foundations: Data, Data, Everywhere",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/WQTCNGESCJE6",
      img: "/Certificates/WQTCNGESCJE6.png",
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: "4PACMBRHMSD4",
      title: "Ask Questions to Make Data-Driven Decisions",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4",
      img: "/Certificates/4PACMBRHMSD4.png",
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: "4PACMBRHMSD4",
      title: "Prepare Data for Exploration",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4",
      img: "/Certificates/4PACMBRHMSD4.png",
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: "VSMTAGTWLBN3",
      title: "Process Data from Dirty to Clean",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/VSMTAGTWLBN3",
      img: "/Certificates/VSMTAGTWLBN3.png",
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: "7BUJPD6TJL3Q",
      title: "Analyze Data to Answer Questions",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/7BUJPD6TJL3Q",
      img: "/Certificates/7BUJPD6TJL3Q.png",
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Google BigQuery", "Data Analysis", "Google Sheets", "SQL"]
    },
    {
      id: "FL94MR4L6JZY",
      title: "Share Data Through the Art of Visualization",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/FL94MR4L6JZY",
      img: "/Certificates/FL94MR4L6JZY.png",
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: [""]
    },
    {
      id: "AN5QQMNDFDKM",
      title: "Programming for Everybody (Getting Started with Python)",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/AN5QQMNDFDKM",
      img: "/Certificates/AN5QQMNDFDKM.png",
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: "WW9AXFF2J87L",
      title: "Python Data Structures",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/WW9AXFF2J87L",
      img: "/Certificates/WW9AXFF2J87L.png",
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: "VRHW6YK5CAR9",
      title: "Using Python to Access Web Data",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/VRHW6YK5CAR9",
      img: "/Certificates/VRHW6YK5CAR9.png",
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: "D5V2D4PUP35R",
      title: "Using Databases with Python",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/D5V2D4PUP35R",
      img: "/Certificates/D5V2D4PUP35R.png",
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    }
  ]
};

export const README = [
  {
    id: "sql_window_functions_for_analytics_45w8ks", //sql-window-functions-for-analytics
    readme:
      "### Window function refresher \n" +
      "## Window function refresher \n" +
      "# Window function refresher \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    employee_id, \n" +
      "    first_name, \n" +
      "    department, \n" +
      "    hire_date, \n" +
      "    ROW_NUMBER() OVER(ORDER BY hire_date) As row_n \n" +
      "FROM \n" +
      "    employees \n" +
      "``` \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    employee_id, \n" +
      "    first_name, \n" +
      "    department, \n" +
      "    hire_date, \n" +
      "    ROW_NUMBER() OVER(PARTITION BY department ORDER BY hire_date) As row_n \n" +
      "FROM \n" +
      "    employees \n" +
      "``` \n" +
      "\n" +
      "### RANK() function \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    employee_id, \n" +
      "    first_name, \n" +
      "    department, \n" +
      "    hire_date, \n" +
      "    RANK() OVER( \n" +
      "        PARTITION BY department ORDER BY salary DESC \n" +
      "    ) As rank_n \n" +
      "FROM \n" +
      "    employees \n" +
      "``` \n" +
      "\n" +
      "- *Retrieve the hire_date. Return details of employees hired on or before Dec, 2005 and are in First Aid, Movies, and Computers departments* \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    first_name, \n" +
      "    email, \n" +
      "    department, \n" +
      "    salary, \n" +
      "    hire_date, \n" +
      "    RANK() OVER( \n" +
      "        PARTITION BY department ORDER BY salary DESC \n" +
      "    ) As rank_n \n" +
      "FROM \n" +
      "    employees \n" +
      "WHERE \n" +
      "    hire_date <= '2005-12-31' AND \n" +
      "    department IN ('First Aid', 'Movies', 'Computers') \n" +
      "``` \n" +
      "\n" +
      "- *Return the fifth ranked salary for each department* \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    * \n" +
      "FROM ( \n" +
      "    SELECT \n" +
      "        first_name, \n" +
      "        email, \n" +
      "        department, \n" +
      "        salary, \n" +
      "        RANK() OVER( \n" +
      "            PARTITION BY department ORDER BY salary DESC \n" +
      "        ) As rank_n \n" +
      "    FROM \n" +
      "        employees \n" +
      ") tbl \n" +
      "WHERE rank_n = 5 \n" +
      "``` \n" +
      "\n" +
      "# Undertand the difference between ROW_NUMBER, RANK AND DENSE_RANK \n" +
      "\n" +
      "- *Create a common table expression to retrieve the customer_id,and how many times the customer has purchased from the mall* \n" +
      "\n" +
      "```sql \n" +
      "WITH purchase_count AS ( \n" +
      "    SELECT \n" +
      "        customer_id, \n" +
      "        COUNT(sales) AS purchase \n" +
      "    FROM \n" +
      "        sales \n" +
      "    GROUP BY customer_id \n" +
      "    ORDER BY purchase DESC \n" +
      ") \n" +
      "\n" +
      "SELECT \n" +
      "    customer_id, \n" +
      "    purchase, \n" +
      "    ROW_NUMBER() OVER (ORDER BY purchase DESC) AS row_n, \n" +
      "    RANK() OVER (ORDER BY purchase DESC) AS rank_n, \n" +
      "    DENSE_RANK() OVER (ORDER BY purchase DESC) AS dense_rank_n \n" +
      "FROM \n" +
      "    purchase_count \n" +
      "ORDER BY purchase DESC; \n" +
      "``` \n" +
      "\n" +
      "# NTILE() \n" +
      "\n" +
      "-   *breaks/page the result set into groups* \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    first_name, \n" +
      "    email, \n" +
      "    department, \n" +
      "    salary, \n" +
      "    NTILE(5) OVER(PARTITION BY department ORDER BY salary DESC) ntile_5 \n" +
      "FROM employees; \n" +
      "\n" +
      "``` \n" +
      "\n" +
      "- *Create a CTE that returns details of an employee and group the employees into five groups based on the order of their salaries* \n" +
      "- *Find the average salary for each group of employees* \n" +
      "\n" +
      "```sql \n" +
      "WITH salary_ranks AS ( \n" +
      "    SELECT \n" +
      "        first_name, \n" +
      "        email, \n" +
      "        department, \n" +
      "        salary, \n" +
      "        NTILE(5) OVER(ORDER BY salary DESC) AS rank_of_salary \n" +
      "    FROM employees \n" +
      ") \n" +
      "\n" +
      "SELECT \n" +
      "    rank_of_salary, \n" +
      "    ROUND(AVG(salary), 2) AS avg_salary \n" +
      "FROM salary_ranks \n" +
      "GROUP BY rank_of_salary \n" +
      "ORDER BY rank_of_salary \n" +
      "``` \n" +
      "\n" +
      "# Aggregate Window Functions \n" +
      "\n" +
      "- *Retrieve the first names, department and number of employees working in that department* \n" +
      "\n" +
      "```sql \n" +
      "-- using subquery \n" +
      "SELECT \n" +
      "    first_name, \n" +
      "    department, \n" +
      "    ( SELECT COUNT(*) AS dept_count FROM employees e1 WHERE e1.department = e2.department) \n" +
      "FROM employees e2 \n" +
      "GROUP BY \n" +
      "    department, \n" +
      "    first_name \n" +
      "ORDER BY department; \n" +
      "\n" +
      "-- using window function \n" +
      "SELECT \n" +
      "    first_name, \n" +
      "    department, \n" +
      "    COUNT(*) OVER( \n" +
      "        PARTITION BY department \n" +
      "        ORDER BY department \n" +
      "    ) AS department_count \n" +
      "FROM employees \n" +
      "``` \n" +
      "\n" +
      "- *Total Salary for all employees* \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    first_name, \n" +
      "    department, \n" +
      "    hire_date, \n" +
      "    SUM(salary) OVER( ORDER BY hire_date ) AS total_salary \n" +
      "FROM employees \n" +
      "``` \n" +
      "\n" +
      "- *Total Salary for each department* \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    first_name, \n" +
      "    department, \n" +
      "    hire_date, \n" +
      "    SUM(salary) OVER( PARTITION BY department ) AS dept_total_salary \n" +
      "FROM employees \n" +
      "``` \n" +
      "\n" +
      "- *Retrieve the first names, department and number of employees working in that department and in region* \n" +
      "\n" +
      "```sql \n" +
      "SELECT \n" +
      "    first_name, \n" +
      "    department, \n" +
      "    COUNT(*) OVER(PARTITION BY department) dept_count, \n" +
      "    region_id, \n" +
      "    COUNT(*) OVER(PARTITION BY region_id) region_count \n" +
      "FROM employees \n" +
      "``` \n" +
      "\n" +
      "- *Calculate the cumulative sum of customers purchase for the different ship mode* \n" +
      "\n" +
      "```sql \n" +
      "-- Create a common table expression to retrieve the customer_id, \n" +
      "-- ship_mode, and how many times the customer has purchased from the mall \n" +
      "WITH purchase_count AS ( \n" +
      "    SELECT \n" +
      "        customer_id, \n" +
      "        ship_mode, \n" +
      "        COUNT(sales) AS purchase \n" +
      "    FROM sales \n" +
      "    GROUP BY customer_id, ship_mode \n" +
      "    ORDER BY purchase DESC \n" +
      ") \n" +
      "\n" +
      "SELECT \n" +
      "    customer_id, \n" +
      "    ship_mode, \n" +
      "    purchase, \n" +
      "    SUM(purchase) OVER( \n" +
      "        PARTITION BY ship_mode \n" +
      "        ORDER BY customer_id ASC \n" +
      "    ) AS sum_of_sales \n" +
      "FROM purchase_count \n" +
      "``` \n" +
      "\n" +
      "# Window frames \n"
  },
  {
    id: "london_bike_sharing_eda_with_python_vvq9jp", //london-bike-eda-dataviz
    readme:
      "```python\n" +
      "# This Python 3 environment comes with many helpful analytics libraries installed\n" +
      "# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python\n" +
      "# For example, here's several helpful packages to load\n" +
      "\n" +
      "import numpy as np # linear algebra\n" +
      "import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)\n" +
      "\n" +
      '        # Input data files are available in the read-only "../input/" directory\n' +
      "# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory\n" +
      "\n" +
      "import os\n" +
      "for dirname, _, filenames in os.walk('/kaggle/input'):\n" +
      "    for filename in filenames:\n" +
      "        print(os.path.join(dirname, filename))\n" +
      "\n" +
      '        # You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" \n' +
      "# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session\n" +
      "```\n" +
      "\n" +
      "## Exploring Data For Analysis\n" +
      "*Convert data set to dataframe using Pandas*\n" +
      "\n" +
      "```python\n" +
      "bike_df_or = pd.read_csv('/kaggle/input/london-bike-sharing-dataset/london_merged.csv')\n" +
      "bike_df_or.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "bike_df_or.shape\n" +
      "```\n" +
      "\n" +
      "*Change column names to more intuitive values*\n" +
      "\n" +
      "```python\n" +
      "# Create copy before we make any changes, inplace=True\n" +
      "bike_df_or.to_csv('dataset_07192023.csv', index=False)\n" +
      "bike_df = pd.read_csv('/kaggle/working/dataset_07192023.csv')\n" +
      "bike_df.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# map our columns to dictionary\n" +
      "columns = dict( zip( bike_df.columns, [\n" +
      "    'time', #timestamp\n" +
      "    'count', #cnt\n" +
      "    'temp_real_celd', #t1\n" +
      "    'temp_feel_celd', #t2\n" +
      "    'humidity_percent', #hum\n" +
      "    'wind_speed_kph', #wind_speed\n" +
      "    'weather', #weather_code\n" +
      "    'is_holiday', #is_holiday\n" +
      "    'is_weekend', #is_weekend\n" +
      "    'season' #season\n" +
      "] ))\n" +
      "columns\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# rename the columns of our dataframe to our mapped columns\n" +
      "bike_df.rename(columns, axis=1, inplace=True)\n" +
      "bike_df.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# convert humidity to percentage\n" +
      "bike_df.humidity_percent = bike_df.humidity_percent / 100\n" +
      "bike_df.humidity_percent\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# we also need to map our season and weather to intuitive values \n" +
      "# season: 0.0=spring, 1.0=summer, 2.0=autumn, 3.0=winter \n" +
      "# weather: 1.0=Clear, 2.0=Scattered clouds, 3.0=Broken clouds, 4.0=Cloudy,\n" +
      "# 7.0=Rainy, 10.0=Rain with thunderstorm, 26.0=Snowfall\n" +
      "\n" +
      "# Change the data type of season and weather before we map the values\n" +
      "bike_df.season = bike_df.season.astype('str')\n" +
      "bike_df.season = bike_df.season.map({\n" +
      "    '0.0':'spring', '1.0':'summer', '2.0':'autumn', '3.0':'winter'\n" +
      "})\n" +
      "\n" +
      "bike_df.weather = bike_df.weather.astype('str')\n" +
      "bike_df.weather = bike_df.weather.map({\n" +
      "    '1.0':'Clear', '2.0':'Scattered clouds', '3.0':'Broken clouds', '4.0':'Cloudy',\n" +
      "    '7.0':'Rainy', '10.0':'Rain with thunderstorm', '26.0':'Snowfall'\n" +
      "})\n" +
      "\n" +
      "bike_df.head()\n" +
      "```\n" +
      "\n" +
      "## Final checking of our dataset\n" +
      "\n" +
      "```python\n" +
      "# check for duplicate rows\n" +
      "bike_df.duplicated().sum()\n" +
      "## shows duplicated rows\n" +
      "# df[df.duplicated() == True] \n" +
      "## removes duplicate rows if there is any\n" +
      "# df.drop_duplicates(inplace=True)\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# check for null values\n" +
      "bike_df.isna().sum()\n" +
      "## get ratio of empty cells by columns\n" +
      "# df.isna().sum()/len(df)\n" +
      "```\n" +
      "\n" +
      "## Exporting dataframe to excel for data viz in Tableau\n" +
      "\n" +
      "```python\n" +
      "bike_df.to_excel('london_bikes_cleaned.xlsx', sheet_name='data')\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "bike_cleaned_df = pd.read_excel('/kaggle/working/london_bikes_cleaned.xlsx')\n" +
      "bike_cleaned_df.head()\n" +
      "```\n"
  },
  {
    id: "market_research_for_ads_target_xjks6d", //mrfat
    readme:
      "```python\n" +
      "# This Python 3 environment comes with many helpful analytics libraries installed\n" +
      "# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python\n" +
      "# For example, here's several helpful packages to load\n" +
      "\n" +
      "import numpy as np # linear algebra\n" +
      "import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)\n" +
      "import sqlite3\n" +
      "import matplotlib.pyplot as plt\n" +
      "import seaborn as sns\n" +
      '        # Input data files are available in the read-only "../input/" directory\n' +
      "# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory\n" +
      "\n" +
      "import os\n" +
      "for dirname, _, filenames in os.walk('/kaggle/input'):\n" +
      "    for filename in filenames:\n" +
      "        print(os.path.join(dirname, filename))\n" +
      "\n" +
      '        # You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" \n' +
      "# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session\n" +
      "```\n" +
      "\n" +
      "# Data Exploration and Data Cleaning/Preprocessing\n" +
      "```python\n" +
      "database = '/kaggle/input/project-files/data.sqlite'\n" +
      "conn = sqlite3.connect(database)\n" +
      '        tables = pd.read_sql("""SELECT *\n' +
      "                        FROM sqlite_master\n" +
      "                        WHERE type='table' \n" +
      "                            AND tbl_name IN (\n" +
      "                                'posts',\n" +
      "                                'comments',\n" +
      "                                'users',\n" +
      "                                'votes'\n" +
      '                                    );""", conn)\n' +
      "tables\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      '        comments = pd.read_sql("""SELECT * FROM comments;""", conn)\n' +
      "comments.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "comments.isna().any().sum()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# Convert date columns to datetime data type\n" +
      "comments['CreationDate'] = pd.to_datetime(comments['CreationDate'])\n" +
      "\n" +
      "# Remove any leading or trailing white spaces from text columns\n" +
      "comments['Text'] = comments['Text'].str.strip()\n" +
      "\n" +
      "comments.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      '        posts = pd.read_sql("""SELECT * FROM posts;""", conn)\n' +
      "posts.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "posts.isna().any().sum()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# Convert date columns to datetime data type\n" +
      "posts['CreationDate'] = pd.to_datetime(posts['CreationDate'])\n" +
      "posts['LastEditDate'] = pd.to_datetime(posts['LastEditDate'])\n" +
      "posts['LastActivityDate'] = pd.to_datetime(posts['LastActivityDate'])\n" +
      "posts['ClosedDate'] = pd.to_datetime(posts['ClosedDate'])\n" +
      "\n" +
      "posts.head()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      '        users = pd.read_sql("""SELECT \n' +
      "    Id,\n" +
      "    Reputation,\n" +
      "    CreationDate,\n" +
      "    DisplayName,\n" +
      "    LastAccessDate,\n" +
      "    WebsiteUrl,\n" +
      "    Location,\n" +
      "    Age,\n" +
      "    Views,\n" +
      "    UpVotes,\n" +
      "    DownVotes\n" +
      '        FROM users;""", conn)\n' +
      "users.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "users.isna().any().sum()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# Convert date columns to datetime data type\n" +
      "users['CreationDate'] = pd.to_datetime(users['CreationDate'])\n" +
      "\n" +
      "# Remove any leading or trailing white spaces from text columns\n" +
      "users['WebsiteUrl'] = users['WebsiteUrl'].str.strip()\n" +
      "users['Location'] = users['Location'].str.strip()\n" +
      "\n" +
      "users.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      '        votes = pd.read_sql("""SELECT * FROM votes;""", conn)\n' +
      "votes.info()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "votes.isna().any().sum()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "# Convert date columns to datetime data type\n" +
      "votes['CreationDate'] = pd.to_datetime(votes['CreationDate'])\n" +
      "votes.info()\n" +
      "```\n" +
      "\n" +
      "# Basic Analysis\n" +
      "```python\n" +
      '        posts_by_year = pd.read_sql("""SELECT \n' +
      "        COUNT(*) AS posts_count,\n" +
      "        STRFTIME('%Y', CreationDate) AS year \n" +
      "    FROM posts\n" +
      '            GROUP BY STRFTIME(\'%Y\', CreationDate);""", conn)\n' +
      "\n" +
      "posts_by_year\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      '        votes_by_year = pd.read_sql("""SELECT \n' +
      "        COUNT(*) AS votes_count,\n" +
      "        STRFTIME('%w', CreationDate) AS day \n" +
      "    FROM votes\n" +
      '            GROUP BY STRFTIME(\'%w\', CreationDate);""", conn)\n' +
      "\n" +
      "votes_by_year\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      '        votes_by_year = pd.read_sql("""SELECT \n' +
      "        COUNT(*) AS comments_count,\n" +
      "        STRFTIME('%w', CreationDate) AS day \n" +
      "    FROM comments\n" +
      '            GROUP BY STRFTIME(\'%w\', CreationDate);""", conn)\n' +
      "\n" +
      "votes_by_year\n" +
      "```\n" +
      "\n" +
      "# Advanced Analysis\n" +
      "```python\n" +
      '        voting_df = pd.read_sql("""\n' +
      "    \n" +
      "    SELECT\n" +
      "        p.id AS PostId,\n" +
      "        p.AuthorID,\n" +
      "        p.AuthorLocation,\n" +
      "        v.id AS VoterId,\n" +
      "        NULLIF(v.location, '') VoterLocation,\n" +
      "        COALESCE(v.Votes, 0) Votes\n" +
      "    FROM (\n" +
      "        SELECT \n" +
      "            p.id,\n" +
      "            u.id AS AuthorID,\n" +
      "            u.location AS AuthorLocation\n" +
      "        FROM posts p\n" +
      "        INNER JOIN users u\n" +
      "        ON p.OwnerUserId = u.id\n" +
      "    ) p\n" +
      "    LEFT JOIN (\n" +
      "        SELECT\n" +
      "            v.PostId,\n" +
      "            u.id,\n" +
      "            u.location,\n" +
      "            COUNT(*) Votes\n" +
      "        FROM votes v\n" +
      "        INNER JOIN users u\n" +
      "        ON v.UserId = u.id\n" +
      "        GROUP BY u.location\n" +
      "    ) v\n" +
      "    ON p.id = v.PostId\n" +
      "    ;\n" +
      '        """, conn)\n' +
      "voting_df\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      '        commenting_df = pd.read_sql("""\n' +
      "    SELECT\n" +
      "        p.id AS PostId,\n" +
      "        p.AuthorID,\n" +
      "        p.AuthorLocation,\n" +
      "        c.id AS CommenterId,\n" +
      "        NULLIF(c.location, '') CommenterLocation,\n" +
      "        COALESCE(c.Comments, 0) Comments\n" +
      "    FROM (\n" +
      "        SELECT \n" +
      "            p.id,\n" +
      "            u.id AS AuthorID,\n" +
      "            u.location AS AuthorLocation\n" +
      "        FROM posts p\n" +
      "        INNER JOIN users u\n" +
      "        ON p.OwnerUserId = u.id\n" +
      "    ) p\n" +
      "    LEFT JOIN (\n" +
      "        SELECT\n" +
      "            c.PostId,\n" +
      "            u.id,\n" +
      "            u.location,\n" +
      "            COUNT(*) Comments\n" +
      "        FROM comments c\n" +
      "        INNER JOIN users u\n" +
      "        ON c.UserId = u.id\n" +
      "        GROUP BY u.location\n" +
      "    ) c\n" +
      "    ON p.id = c.PostId\n" +
      "    ;\n" +
      '        """, conn)\n' +
      "commenting_df\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "country_dictionary = pd.read_json('/kaggle/input/project-files/country_dictionary.json',  typ='series')\n" +
      "country_dictionary\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "users['Country'] = users.loc[:,'Location'].map(country_dictionary)\n" +
      "users.head()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "commenting_df['AuthorCountry'] = commenting_df.loc[:, 'AuthorLocation'].map(country_dictionary)\n" +
      "commenting_df['CommenterCountry'] = commenting_df.loc[:, 'CommenterLocation'].map(country_dictionary)\n" +
      "commenting_df.head()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "voting_df['AuthorCountry'] = voting_df.loc[:, 'AuthorLocation'].map(country_dictionary)\n" +
      "voting_df['VoterCountry'] = voting_df.loc[:, 'VoterLocation'].map(country_dictionary)\n" +
      "voting_df.head()\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "post_tags_df = posts[['Id','Tags']]\n" +
      "post_tags_df.index = post_tags_df['Id']\n" +
      "post_tags_df\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "tags = pd.DataFrame(post_tags_df[post_tags_df['Tags'] != '' ]['Tags'].str.extractall('\\<(.*?)\\>') )\n" +
      "tags['PostId'] = tags.index\n" +
      "tags['PostId'] = np.select([True],[tags['PostId'].str[0]],default =tags['PostId'].str[0])\n" +
      "tags.rename(columns={0:'Tag'}, inplace=True)\n" +
      "tags.reset_index(drop=True, inplace=True)\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "voting_tags = pd.merge(voting_df, tags,how='inner', left_on='PostId', right_on='PostId')\n" +
      "voting_tags = voting_tags[['PostId', 'AuthorCountry', 'VoterCountry', 'Tag']]\n" +
      "voting_tags.head(10)\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "commenting_tags = pd.merge(commenting_df, tags,how='inner', left_on='PostId', right_on='PostId')\n" +
      "commenting_tags = commenting_tags[['PostId', 'AuthorCountry', 'CommenterCountry', 'Tag']]\n" +
      "commenting_tags.head(10)\n" +
      "```\n" +
      "\n" +
      "#  Export DataFrame to a CSV File\n" +
      "```python\n" +
      "\n" +
      "\n" +
      "with pd.ExcelWriter('dataframes.xlsx') as writer:\n" +
      "    # Write each DataFrame to a separate sheet in the Excel file\n" +
      "    posts.to_excel(writer, sheet_name='Posts', index=False)\n" +
      "    votes.to_excel(writer, sheet_name='Votes', index=False)\n" +
      "    users.to_excel(writer, sheet_name='Users', index=False)\n" +
      "    comments.to_excel(writer, sheet_name='Comments', index=False)\n" +
      "    voting_df.to_excel(writer, sheet_name='Voting', index=False)\n" +
      "    voting_tags.to_excel(writer, sheet_name='Voting Tags', index=False)\n" +
      "    commenting_df.to_excel(writer, sheet_name='Commenting', index=False)\n" +
      "    commenting_tags.to_excel(writer, sheet_name='Commenting Tags', index=False)\n" +
      "```\n" +
      "\n" +
      "```python\n" +
      "check_cleaned_df = pd.read_excel('/kaggle/working/dataframes.xlsx')\n" +
      "check_cleaned_df.info()\n" +
      "```\n"
  },
  {
    id: "us_flight_delays_and_cancellations_2015_4v5kqu", //us-flight-delays-and-cancellations-2015
    readme:
      "## You can see the dashboard [here](https://public.tableau.com/views/2015FlightDelaysandCancellationsUS/Main?:language=en-US&:display_count=n&:origin=viz_share_link)."
  },
  {
    id: "iowa_liquor_sales_2012_2017_v2_dil09k", //iowa-liquor-sales-v2
    readme:
      "import pandas as pd\n" +
      "    from ydata_profiling import ProfileReport\n" +
      "    \n" +
      "    import os\n" +
      "    for dirname, _, filenames in os.walk('/kaggle/input'):\n" +
      "for filename in filenames:\n" +
      "    print(os.path.join(dirname, filename))\n" +
      "    \n" +
      "    # Data Exploration and Data Cleaning/Preprocessing\n" +
      "    \n" +
      "    \n" +
      "    sales = pd.read_csv('/kaggle/input/iowa-liquor-sales/Iowa_Liquor_Sales.csv')\n" +
      "    sales.head(20)\n" +
      "    \n" +
      "    ### We need to profile our data sets to see the overview and initially analyse the data\n" +
      "    \n" +
      "    \n" +
      "    # This may take a while\n" +
      "    #profile = ProfileReport(sales)\n" +
      "    #profile\n" +
      "    \n" +
      "    ## Data type coversion\n" +
      "    \n" +
      "    ### Convert date columns to datetime data type\n" +
      "    \n" +
      "    \n" +
      "    sales['Date'] = pd.to_datetime(sales['Date'])\n" +
      "    sales['Date'].astype\n" +
      "    \n" +
      "    ## Check for Na\n" +
      "    \n" +
      "    \n" +
      "    sales.columns.isna()\n" +
      "    \n" +
      "    ## Check for relevant data for inconsistency/anomally\n" +
      "    \n" +
      "    # We will convert the City to uppercase and strip white spaces so we can get better results\n" +
      "    sales['City'] = sales['City'].str.upper()\n" +
      "    sales['City'] = sales['City'].str.strip()\n" +
      "    cities = pd.DataFrame(sales['City'].value_counts(ascending=True))\n" +
      "    cities['Name'] = cities.index\n" +
      "    cities\n" +
      "    \n" +
      "    \n" +
      "    # We noticed that there are significally low numbers of City count, \n" +
      "    # To make sure these are not mistake. We import nltk \n" +
      "    import nltk\n" +
      "    for city in cities[cities['City'] < 1000]['Name']:\n" +
      "for compare in cities['Name']:\n" +
      "    distance = nltk.edit_distance(compare, city)\n" +
      "    if  distance > 0 and distance < 3:\n" +
      "        print((compare, city))\n" +
      "    \n" +
      "    ### Based on the result we map \n" +
      "    \n" +
      "    { \n" +
      "'CLEARLAKE': 'CLEAR LAKE',\n" +
      "'GRAND MOUNDS': 'GRAND MOUND',\n" +
      "'OTUMWA': 'OTTUMWA'\n" +
      "    }\n" +
      "    \n" +
      "    \n" +
      "    sales['City'].map(\n" +
      "{ \n" +
      "    'CLEARLAKE': 'CLEAR LAKE',\n" +
      "    'GRAND MOUNDS': 'GRAND MOUND',\n" +
      "    'OTUMWA': 'OTTUMWA'\n" +
      "}\n" +
      "    )\n" +
      "    sales['City'].value_counts()\n" +
      "    \n" +
      "    # We will also implement the same logic to County\n" +
      "    sales['County'] = sales['County'].str.upper()\n" +
      "    sales['County'] = sales['County'].str.strip()\n" +
      "    counties = pd.DataFrame(sales['County'].value_counts(ascending=True))\n" +
      "    counties['Name'] = counties.index\n" +
      "    \n" +
      "    for county in counties[counties['County'] < 1000]['Name']:\n" +
      "for compare in counties['Name']:\n" +
      "    distance = nltk.edit_distance(compare, county)\n" +
      "    if  distance > 0 and distance < 3:\n" +
      "        print((compare, county))\n" +
      "    \n" +
      "    \n" +
      "    sales.head()\n" +
      "    \n" +
      "    \n" +
      "    sales['City'].str.contains(',').sum()\n" +
      "    \n" +
      "    \n" +
      "    sales['Store Location'].str.contains(',').sum()\n" +
      "    \n" +
      "    \n" +
      "    sales['Item Description'].str.contains(',').sum()\n" +
      "    \n" +
      "    \n" +
      "    sales['Item Description'] = sales['Item Description'].str.replace(',', ' ')\n" +
      "    sales['Item Description'].str.contains(',').sum()\n" +
      "    \n" +
      "    \n" +
      "    sales['Store Name'].str.contains(',').sum()\n" +
      "    \n" +
      "    \n" +
      "    sales['Store Name'] = sales['Store Name'].str.replace(',', ' ')\n" +
      "    sales['Store Name'].str.contains(',').sum()\n" +
      "    \n" +
      "    \n" +
      "    sales['Store Lat'] = sales['Store Location'].str.extract(r'\\(([^)]+)\\,')\n" +
      "    sales['Store Long'] = sales['Store Location'].str.extract(r'\\d,(.*)\\)')\n" +
      "    sales['Address'] = sales['Address'].str.replace(',', ' ')\n" +
      "    (\n" +
      "sales['Store Lat'].str.contains(',').sum(), \n" +
      "sales['Store Long'].str.contains(',').sum(), \n" +
      "sales['Address'].str.contains(',').sum()\n" +
      "    )\n" +
      "    \n" +
      "    \n" +
      "    sales['State Bottle Cost'] = sales['State Bottle Cost'].str.replace('\\$', '')\n" +
      "    sales['State Bottle Retail'] = sales['State Bottle Retail'].str.replace('\\$', '')\n" +
      "    sales['Sale (Dollars)'] = sales['Sale (Dollars)'].str.replace('\\$', '')\n" +
      "    \n" +
      "    # Great! Now we will export our dataframe for Tableau\n" +
      "    \n" +
      "    \n" +
      "    sales.loc[:, sales.columns != 'Store Location'].to_csv('iowa_liquor_sales_2015.csv')\n" +
      "    \n" +
      "    \n" +
      "    sales_cleaned = pd.read_csv('/kaggle/working/iowa_liquor_sales_2015.csv')\n" +
      "    sales_cleaned.head()\n"
  },
  {
    id: "a_game_of_defense_of_the_ancient_2_dota2_p12n2j", //dota2
    readme:
      "## You can see the dashboard [here](https://public.tableau.com/views/AGameofDefenseofTheAncient2-DOTA2/Main?:language=en-US&:display_count=n&:origin=viz_share_link)."
  }
];

export function getProject(projectId) {
  return PROJECTS.find((x) => x.id === projectId) ?? false;
}

export function getReadme(projectId) {
  return README.find((x) => x.id === projectId) ?? false;
}

export {
  HOME_PAGE,
  ERROR_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  REGISTRATION_SETUP_PAGE,
  FORGOT_PASSWORD_PAGE,
  PROJECTS_PAGE,
  PROJECT_PAGE,
  ABOUT_PAGE,
  CONTACT_PAGE,
  CREDENTIALS_PAGE,
  PROJECT_FORM_PAGE,
  USER_SETTINGS_PAGE
} from "./navigation.js";
