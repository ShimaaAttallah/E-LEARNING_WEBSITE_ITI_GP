# Generated by Django 3.2.14 on 2022-09-04 12:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_name', models.CharField(max_length=100)),
                ('course_description', models.TextField()),
                ('course_image', models.ImageField(null=True, upload_to='courses/images')),
                ('course_created_at', models.DateTimeField(auto_now_add=True)),
                ('course_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='course_category', to='category.category')),
                ('course_instructor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='instructor_course', to=settings.AUTH_USER_MODEL)),
                ('student', models.ManyToManyField(blank=True, null=True, related_name='enroll', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
