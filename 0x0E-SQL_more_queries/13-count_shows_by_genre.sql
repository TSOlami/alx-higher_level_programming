-- lists all genres from hbtn_0d_tvshows and displays the number of shows linked to each
-- Each record should display: <TV Show genre> - <Number of shows linked to this genre>
-- The database name will be passed as an argument of the mysql command




SELECT g.`name` AS `genre`,
       COUNT(*) AS `number_of_shows`
  FROM `tv_genres` AS g
       INNER JOIN `tv_show_genres` AS t
       ON g.`id` = t.`genre_id`
 GROUP BY g.`name`
 ORDER BY `number_of_shows` DESC;
